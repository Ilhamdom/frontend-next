import { desc } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { sasaranKegiatan } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { createSasaranKegiatanSchema } from "@/validators/sasaran-kegiatan";

export async function GET() {
  try {
    const rows = await db.select().from(sasaranKegiatan).orderBy(desc(sasaranKegiatan.id));

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createSasaranKegiatanSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [inserted] = await db
      .insert(sasaranKegiatan)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        kegiatanId: body.kegiatanId,
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