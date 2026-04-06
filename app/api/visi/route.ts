import { desc } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { visi } from "@/db/schema";
import { createVisiSchema, getValidationMessage } from "@/validators/visi";

export async function GET() {
  try {
    const rows = await db.select().from(visi).orderBy(desc(visi.createdAt));

    return NextResponse.json({ success: true, data: rows });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsedBody = createVisiSchema.safeParse(await request.json());

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
    const createdAt = body.createdAt ? new Date(body.createdAt) : new Date();

    const [inserted] = await db
      .insert(visi)
      .values({
        ...(body.id != null ? { id: body.id } : {}),
        periodeId: body.periodeId,
        visiText: body.visiText.trim(),
        createdAt,
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
