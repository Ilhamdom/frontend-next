import { desc } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { sasaranProgram } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { createSasaranProgramSchema } from "@/validators/sasaran-program";

export async function GET() {
  try {
    const rows = await db.select().from(sasaranProgram).orderBy(desc(sasaranProgram.id));

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createSasaranProgramSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [inserted] = await db
      .insert(sasaranProgram)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        programId: body.programId,
        kode: body.kode?.trim() || null,
        sasaranText: body.sasaranText.trim(),
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}