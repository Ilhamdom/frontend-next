import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function GET() {
  // Ambil semua user
  const result = await db.select({ username: users.username, unit_kerja: users.unit_kerja, role: users.role }).from(users);
  // Format array user
  const usersArr = result.map(u => ({ username: u.username, unit: u.unit_kerja, role: u.role }));
  return NextResponse.json(usersArr);
}
