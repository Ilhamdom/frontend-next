import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { targetIndikator } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { createTargetKinerjaSchema } from "@/validators/target-kinerja";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: "ID tidak valid" }, { status: 400 });
    }

    const rows = await db.select().from(targetIndikator).where(eq(targetIndikator.id, id));

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: "Data tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: rows[0] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: "ID tidak valid" }, { status: 400 });
    }

    const parsedBody = createTargetKinerjaSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [updated] = await db
      .update(targetIndikator)
      .set({
        indikatorId: body.indikatorId,
        tahunId: body.tahunId,
        target: body.target.toString(),
        realisasi: body.realisasi.toString(),
      })
      .where(eq(targetIndikator.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json({ success: false, message: "Data tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: "ID tidak valid" }, { status: 400 });
    }

    const [deleted] = await db
      .delete(targetIndikator)
      .where(eq(targetIndikator.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json({ success: false, message: "Data tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}