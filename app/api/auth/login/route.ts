import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/tables/users";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    // Cari user berdasarkan username
    const user = await db.select().from(users).where(eq(users.username, username)).limit(1);
    if (!user || user.length === 0) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }

    // Cek password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }

    // Jangan kirim password ke client
    const { password: _pw, ...userData } = user[0];
    // Pastikan role ikut dikirim
    return NextResponse.json({ user: { ...userData, role: user[0].role } });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
