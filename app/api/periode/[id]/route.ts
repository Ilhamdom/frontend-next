import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { periode } from "@/db/schema";
import { getValidationMessage, updatePeriodeSchema } from "@/validators/periode";

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

    const row = await db.query.periode.findFirst({ where: eq(periode.id, id) });

    if (!row) {
      return NextResponse.json(
        { success: false, message: "Data periode tidak ditemukan." },
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

    const parsedBody = updatePeriodeSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          success: false,
          message: getValidationMessage(parsedBody.error),
        },
        { status: 400 }
      );
    }

    const body = parsedBody.data;

    const [updated] = await db
      .update(periode)
      .set({
        ...(body.nama != null ? { nama: body.nama } : {}),
        ...(body.tahunMulai != null ? { tahunMulai: body.tahunMulai } : {}),
        ...(body.tahunSelesai != null ? { tahunSelesai: body.tahunSelesai } : {}),
        ...(body.isActive != null ? { isActive: body.isActive } : {}),
      })
      .where(eq(periode.id, id))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Data periode tidak ditemukan." },
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

    const [deleted] = await db.delete(periode).where(eq(periode.id, id)).returning();

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Data periode tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}