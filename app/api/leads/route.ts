import { NextResponse } from "next/server";
import { insertRow } from "@/lib/persistence";

const RATE_LIMIT = new Map<string, number>();
const RATE_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const lastRequest = RATE_LIMIT.get(ip) || 0;

  if (now - lastRequest < RATE_WINDOW_MS / MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  RATE_LIMIT.set(ip, now);

  // Cleanup old entries periodically
  if (RATE_LIMIT.size > 1000) {
    const cutoff = now - RATE_WINDOW_MS;
    Array.from(RATE_LIMIT.entries()).forEach(([key, time]) => {
      if (time < cutoff) RATE_LIMIT.delete(key);
    });
  }

  return true;
}

function sanitizeString(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .slice(0, 500);
}

function validateDate(dateStr: unknown): boolean {
  if (typeof dateStr !== "string") return false;
  const date = new Date(dateStr);
  const now = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 3);
  return date instanceof Date && !isNaN(date.getTime()) && date <= now && date >= minDate;
}

const VALID_SEVERITY = ["minor", "moderate", "serious", "severe"];
const VALID_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
  "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export async function POST(request: Request) {
  // CORS preflight
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    "https://cruiseshipinjurycases.com",
    "https://www.cruiseshipinjurycases.com",
    "http://localhost:3000"
  ];

  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins.includes(origin || "") ? origin! : allowedOrigins[0],
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const responseHeaders = {
    "Access-Control-Allow-Origin": allowedOrigins.includes(origin || "") ? origin! : allowedOrigins[0],
  };

  const ip = getClientIP(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429, headers: responseHeaders }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request format" },
      { status: 400, headers: responseHeaders }
    );
  }

  const required = ["accidentDate", "cruiseLine", "accidentType", "severity", "state"];
  const missing = required.filter((k) => !data[k] || (typeof data[k] === "string" && data[k].trim() === ""));

  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400, headers: responseHeaders }
    );
  }

  // Validate and sanitize inputs
  if (!validateDate(data.accidentDate)) {
    return NextResponse.json(
      { ok: false, error: "Invalid accident date" },
      { status: 400, headers: responseHeaders }
    );
  }

  if (!VALID_SEVERITY.includes(data.severity)) {
    return NextResponse.json(
      { ok: false, error: "Invalid severity level" },
      { status: 400, headers: responseHeaders }
    );
  }

  const sanitizedState = sanitizeString(data.state);
  if (!VALID_STATES.includes(sanitizedState)) {
    return NextResponse.json(
      { ok: false, error: "Invalid state" },
      { status: 400, headers: responseHeaders }
    );
  }

  const sanitized = {
    accidentDate: data.accidentDate,
    cruiseLine: sanitizeString(data.cruiseLine),
    accidentType: sanitizeString(data.accidentType),
    severity: data.severity,
    state: sanitizedState,
  };

  try {
    const saved = await insertRow("leads", sanitized);
    return NextResponse.json({ ok: true, leadId: saved.id }, { headers: responseHeaders });
  } catch (error) {
    console.error("Failed to save lead:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process request. Please try again." },
      { status: 500, headers: responseHeaders }
    );
  }
}
