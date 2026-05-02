import { promises as fs } from "fs";
import { join } from "path";

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

async function ensureDir(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // ignore
  }
}

function getFilePath(table: TableName): string {
  return join(DATA_DIR, `${table}.json`);
}

async function readTable<T>(table: TableName): Promise<T[]> {
  await ensureDir();
  try {
    const data = await fs.readFile(getFilePath(table), "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTable<T>(table: TableName, rows: T[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(getFilePath(table), JSON.stringify(rows, null, 2));
}

export async function insertRow<T extends Record<string, unknown>>(
  table: TableName,
  data: Omit<T, "id" | "createdAt">
): Promise<T & { id: string; createdAt: string }> {
  const rows = await readTable<T & { id: string; createdAt: string }>(table);
  const newRow = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString()
  } as T & { id: string; createdAt: string };
  rows.push(newRow);
  await writeTable(table, rows);
  return newRow;
}

export async function queryTable<T>(table: TableName): Promise<T[]> {
  return readTable<T>(table);
}
