import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { indikatorKinerja } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { updateIndikatorKinerjaSchema } from "@/validators/indikator-kinerja";

type RouteParams = {
  params: Promise<{ id: string }>;
};

function parseId(idParam: string) {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id: idParam } = await params;
    const id = parseId(idParam);

    if (id == null) {
      return NextResponse.json(
        { success: false, message: "Parameter id tidak valid." },
        { status: 400 }
      );
    }

    const row = await db.query.indikatorKinerja.findFirst({ where: eq(indikatorKinerja.id, id) });

    if (!row) {
      return NextResponse.json(
        { success: false, message: "Data indikator kinerja tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: row });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id: idParam } = await params;
    const id = parseId(idParam);

    if (id == null) {
      return NextResponse.json(
        { success: false, message: "Parameter id tidak valid." },
        { status: 400 }
      );
    }

    const parsedBody = updateIndikatorKinerjaSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;
    const updates: {
      sasaranId?: number | null;
      kode?: string | null;
      namaIndikator?: string | null;
      satuan?: string | null;
      jenis?: string | null;
      baseline?: string | null;
    } = {};

    if (body.sasaranId !== undefined) {
      updates.sasaranId = body.sasaranId;
    }

    if (body.kode !== undefined) {
      updates.kode = body.kode?.trim() || null;
    }

    if (body.namaIndikator !== undefined) {
      updates.namaIndikator = body.namaIndikator?.trim() || null;
    }

    if (body.satuan !== undefined) {
      updates.satuan = body.satuan?.trim() || null;
    }

    if (body.jenis !== undefined) {
      updates.jenis = body.jenis?.trim() || null;
    }

    if (body.baseline !== undefined) {
      updates.baseline = body.baseline;
    }

    const [updated] = await db
      .update(indikatorKinerja)
      .set(updates)
      .where(eq(indikatorKinerja.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Data indikator kinerja tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id: idParam } = await params;
    const id = parseId(idParam);

    if (id == null) {
      return NextResponse.json(
        { success: false, message: "Parameter id tidak valid." },
        { status: 400 }
      );
    }

    const [deleted] = await db
      .delete(indikatorKinerja)
      .where(eq(indikatorKinerja.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Data indikator kinerja tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}