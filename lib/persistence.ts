import { promises as fs } from "node:fs";
import path from "node:path";

type TableName = "leads" | "pages" | "faq_variants" | "sources" | "qa_audits";

const DB_DIR = path.join(process.cwd(), ".data");

async function ensureDir() { await fs.mkdir(DB_DIR, { recursive: true }); }
async function tablePath(table: TableName) { await ensureDir(); return path.join(DB_DIR, `${table}.json`); }

export async function readTable<T>(table: TableName): Promise<T[]> {
  const file = await tablePath(table);
  try { return JSON.parse(await fs.readFile(file, "utf8")) as T[]; } catch { return []; }
}

export async function insertRow<T extends object>(table: TableName, row: T): Promise<T & { id: string; createdAt: string }> {
  const rows = await readTable<T & { id: string; createdAt: string }>(table);
  const payload = { ...row, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  rows.push(payload);
  await fs.writeFile(await tablePath(table), JSON.stringify(rows, null, 2));
  return payload;
}
