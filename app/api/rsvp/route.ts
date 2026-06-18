import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow, googleSheetsConfigured } from "@/lib/googleSheets";

const rsvpSchema = z.object({
  fullName: z.string().trim().min(1),
  guestName: z.string().trim().optional(),
  attending: z.enum(["yes", "no"]),
});

export async function POST(request: Request) {
  if (!googleSheetsConfigured()) {
    console.error("RSVP submission received but Google Sheets is not configured.");
    return NextResponse.json(
      { error: "Form is not configured yet. Please contact us directly." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = rsvpSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { fullName, guestName, attending } = parsed.data;

  try {
    await appendRow("RSVP", [
      new Date().toISOString(),
      fullName,
      guestName ?? "",
      attending === "yes" ? "Sim" : "Não",
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to append RSVP row", error);
    return NextResponse.json(
      { error: "Could not save your RSVP right now." },
      { status: 502 }
    );
  }
}
