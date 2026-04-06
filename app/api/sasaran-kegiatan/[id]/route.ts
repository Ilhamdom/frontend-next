import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { sasaranKegiatan } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { updateSasaranKegiatanSchema } from "@/validators/sasaran-kegiatan";

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

    const row = await db.query.sasaranKegiatan.findFirst({ where: eq(sasaranKegiatan.id, id) });

    if (!row) {
      return NextResponse.json(
        { success: false, message: "Data sasaran kegiatan tidak ditemukan." },
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

    const parsedBody = updateSasaranKegiatanSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;
    const updates: {
      kegiatanId?: number | null;
      kode?: string | null;
      sasaranText?: string;
    } = {};

    if (body.kegiatanId !== undefined) {
      updates.kegiatanId = body.kegiatanId;
    }

    if (body.kode !== undefined) {
      updates.kode = body.kode?.trim() || null;
    }

    if (body.sasaranText !== undefined) {
      updates.sasaranText = body.sasaranText?.trim() || undefined;
    }

    // Filter out undefined values
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined)
    );

    const [updated] = await db
      .update(sasaranKegiatan)
      .set(filteredUpdates)
      .where(eq(sasaranKegiatan.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Data sasaran kegiatan tidak ditemukan." },
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
      .delete(sasaranKegiatan)
      .where(eq(sasaranKegiatan.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Data sasaran kegiatan tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}