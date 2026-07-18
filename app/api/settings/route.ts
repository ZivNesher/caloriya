import { NextResponse } from "next/server";
import { readSettings, writeSettings } from "@/lib/settingsStorage";
import { sanitizeSettings } from "@/lib/settingsSchema";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const settings = sanitizeSettings(await readSettings());
  return NextResponse.json({ settings });
}

export async function PUT(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const settings = (body as { settings?: unknown })?.settings;

  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    return NextResponse.json({ error: "Invalid settings payload" }, { status: 400 });
  }

  const safeSettings = sanitizeSettings(settings);
  await writeSettings(safeSettings);
  return NextResponse.json({ ok: true, settings: safeSettings });
}
