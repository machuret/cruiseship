import { NextResponse } from "next/server";
import { insertRow } from "@/lib/persistence";

export async function POST(request: Request) {
  const data = await request.json();
  const required = ["accidentDate", "cruiseLine", "accidentType", "severity", "state"];
  const missing = required.filter((k) => !data[k]);
  if (missing.length) return NextResponse.json({ ok: false, error: `Missing: ${missing.join(", ")}` }, { status: 400 });

  const saved = await insertRow("leads", data);
  return NextResponse.json({ ok: true, leadId: saved.id });
}
