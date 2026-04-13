import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { tahun } from "@/db/schema";
import { createTahunSchema, getValidationMessage } from "@/validators/tahun";

export async function GET() {
  try {
    const rows = await db.select().from(tahun).orderBy(tahun.id);

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createTahunSchema.safeParse(await request.json());

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
      .insert(tahun)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        tahun: body.tahun,
        periodeId: body.periodeId,
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}