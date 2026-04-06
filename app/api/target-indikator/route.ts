import { desc, eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { targetIndikator, tahun } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { createTargetKinerjaSchema } from "@/validators/target-kinerja";

export async function GET() {
  try {
    const rawRows = await db
      .select({
        id: targetIndikator.id,
        indikatorId: targetIndikator.indikatorId,
        tahunId: targetIndikator.tahunId,
        target: targetIndikator.target,
        realisasi: targetIndikator.realisasi,
        createdAt: targetIndikator.createdAt,
        tahun_id: tahun.id,
        tahun_value: tahun.tahun,
        periodeId: tahun.periodeId,
      })
      .from(targetIndikator)
      .leftJoin(tahun, eq(targetIndikator.tahunId, tahun.id))
      .orderBy(desc(targetIndikator.id));

    const rows = rawRows.map(row => ({
      id: row.id,
      indikatorId: row.indikatorId,
      tahunId: row.tahunId,
      target: row.target,
      realisasi: row.realisasi,
      createdAt: row.createdAt,
      tahun: row.tahun_id ? {
        id: row.tahun_id,
        tahun: row.tahun_value,
        periodeId: row.periodeId,
      } : null,
    }));

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createTargetKinerjaSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [inserted] = await db
      .insert(targetIndikator)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        indikatorId: body.indikatorId,
        tahunId: body.tahunId,
        target: body.target.toString(),
        realisasi: body.realisasi.toString(),
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}