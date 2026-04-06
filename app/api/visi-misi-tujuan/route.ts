import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getVisiMisiTujuan } from "@/db/queries/visi-misi-tujuan";

function parsePeriodeId(value: string | null) {
  if (value == null || value.trim() === "") {
    return null;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }

  return parsed;
}

export async function GET(request: NextRequest) {
  try {
    const periodeIdParam = request.nextUrl.searchParams.get("periodeId");
    const periodeId = parsePeriodeId(periodeIdParam);

    if (periodeIdParam !== null && periodeId === null) {
      return NextResponse.json(
        { success: false, message: "Parameter periodeId tidak valid." },
        { status: 400 }
      );
    }

    const data = await getVisiMisiTujuan(periodeId ?? undefined);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan server.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}