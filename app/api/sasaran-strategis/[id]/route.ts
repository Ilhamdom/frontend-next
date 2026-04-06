import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { sasaranStrategis } from "@/db/schema";
import { getValidationMessage } from "@/validators/common";
import { updateSasaranStrategisSchema } from "@/validators/sasaran-strategis";

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

    const row = await db.query.sasaranStrategis.findFirst({ where: eq(sasaranStrategis.id, id) });

    if (!row) {
      return NextResponse.json(
        { success: false, message: "Data sasaran strategis tidak ditemukan." },
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

    const parsedBody = updateSasaranStrategisSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsedBody.error) },
        { status: 400 }
      );
    }

    const body = parsedBody.data;
    const updates: {
      tujuanId?: number | null;
      kode?: string | null;
      sasaranText?: string | null;
    } = {};

    if (body.tujuanId !== undefined) {
      updates.tujuanId = body.tujuanId;
    }

    if (body.kode !== undefined) {
      updates.kode = body.kode?.trim() || null;
    }

    if (body.sasaranText !== undefined) {
      updates.sasaranText = body.sasaranText?.trim() || null;
    }

    const [updated] = await db
      .update(sasaranStrategis)
      .set(updates)
      .where(eq(sasaranStrategis.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Data sasaran strategis tidak ditemukan." },
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
      .delete(sasaranStrategis)
      .where(eq(sasaranStrategis.id, id))
      .returning();

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Data sasaran strategis tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}