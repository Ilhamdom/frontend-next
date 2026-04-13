import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { periode } from "@/db/schema";
import { createPeriodeSchema, getValidationMessage } from "@/validators/periode";

export async function GET() {
  try {
    const rows = await db.select().from(periode).orderBy(periode.id);

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createPeriodeSchema.safeParse(await request.json());

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

    const [inserted] = await db
      .insert(periode)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        nama: body.nama,
        tahunMulai: body.tahunMulai,
        tahunSelesai: body.tahunSelesai,
        isActive: body.isActive,
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}