import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow, googleSheetsConfigured } from "@/lib/googleSheets";

const messageSchema = z.object({
  fullName: z.string().trim().min(1),
  message: z.string().trim().min(1),
});

export async function POST(request: Request) {
  if (!googleSheetsConfigured()) {
    console.error("Message submission received but Google Sheets is not configured.");
    return NextResponse.json(
      { error: "Form is not configured yet. Please contact us directly." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = messageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { fullName, message } = parsed.data;

  try {
    await appendRow("Mensagens", [new Date().toISOString(), fullName, message]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to append message row", error);
    return NextResponse.json(
      { error: "Could not save your message right now." },
      { status: 502 }
    );
  }
}
