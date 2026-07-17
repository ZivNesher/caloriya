import { NextResponse } from "next/server";
import { readLogs, writeLogs } from "@/lib/logStorage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const logs = await readLogs();
  return NextResponse.json({ logs });
}

export async function PUT(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const logs = (body as { logs?: unknown })?.logs;

  if (!logs || typeof logs !== "object" || Array.isArray(logs)) {
    return NextResponse.json({ error: "Invalid logs payload" }, { status: 400 });
  }

  await writeLogs(logs as Record<string, unknown>);
  return NextResponse.json({ ok: true });
}
