import { promises as fs } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const DATA_DIR = process.cwd() + "/data/storage";

export interface LeadRow {
  id: string;
  accidentDate: string;
  cruiseLine: string;
  accidentType: string;
  severity: string;
  state: string;
  createdAt: string;
}

export interface PageRow {
  id: string;
  url: string;
  title: string;
  publishedAt: string;
}

export type TableName = "leads" | "pages" | "faq_variants" | "sources" | "qa_audits";

async function ensureDir(): Promise<boolean> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    return true;
  } catch (err) {
    console.warn("Failed to create data directory:", err);
    return false;
  }
}

function getFilePath(table: TableName): string {
  return join(DATA_DIR, `${table}.json`);
}

async function readTable<T>(table: TableName): Promise<T[]> {
  const dirExists = await ensureDir();
  if (!dirExists) return [];

  try {
    const data = await fs.readFile(getFilePath(table), "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // File doesn't exist or is invalid, return empty array
    return [];
  }
}

async function writeTable<T>(table: TableName, rows: T[]): Promise<boolean> {
  const dirExists = await ensureDir();
  if (!dirExists) return false;

  try {
    await fs.writeFile(getFilePath(table), JSON.stringify(rows, null, 2));
    return true;
  } catch (err) {
    console.error(`Failed to write table ${table}:`, err);
    return false;
  }
}

export async function insertRow<T extends Record<string, unknown>>(
  table: TableName,
  data: T
): Promise<T & { id: string; createdAt: string }> {
  const newRow = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString()
  } as T & { id: string; createdAt: string };

  try {
    const rows = await readTable<T & { id: string; createdAt: string }>(table);
    rows.push(newRow);
    const success = await writeTable(table, rows);

    if (!success) {
      // If file write fails (e.g., serverless environment), log to console as fallback
      console.log("LEAD_DATA:", JSON.stringify(newRow));
    }

    return newRow;
  } catch (err) {
    console.error("Insert failed:", err);
    // Still return the row with ID so client doesn't fail
    console.log("LEAD_DATA_FALLBACK:", JSON.stringify(newRow));
    return newRow;
  }
}

export async function queryTable<T>(table: TableName): Promise<T[]> {
  return readTable<T>(table);
}
