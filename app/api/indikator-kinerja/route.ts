import { desc } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { indikatorKinerja } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { createIndikatorKinerjaSchema } from "@/validators/indikator-kinerja";

export async function GET() {
  try {
    const rows = await db.select().from(indikatorKinerja).orderBy(desc(indikatorKinerja.id));

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createIndikatorKinerjaSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [inserted] = await db
      .insert(indikatorKinerja)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        sasaranId: body.sasaranId,
        kode: body.kode.trim(),
        namaIndikator: body.namaIndikator.trim(),
        satuan: body.satuan.trim(),
        jenis: body.jenis.trim(),
        baseline: body.baseline,
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}