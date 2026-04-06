import { asc, eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { misi, tujuan, visi } from "@/db/schema";

export type TujuanItem = typeof tujuan.$inferSelect;
export type MisiItem = typeof misi.$inferSelect & {
  tujuan: TujuanItem[];
};
export type VisiItem = typeof visi.$inferSelect & {
  misi: MisiItem[];
};

export async function getVisiMisiTujuan(periodeId?: number): Promise<VisiItem[]> {
  const visiRows = periodeId == null
    ? await db.select().from(visi).orderBy(asc(visi.id))
    : await db.select().from(visi).where(eq(visi.periodeId, periodeId)).orderBy(asc(visi.id));

  const visiIds = visiRows.map((item) => item.id);

  const misiRows = visiIds.length === 0
    ? []
    : await db.select().from(misi).where(inArray(misi.visiId, visiIds)).orderBy(asc(misi.id));

  const misiIds = misiRows.map((item) => item.id);

  const tujuanRows = misiIds.length === 0
    ? []
    : await db.select().from(tujuan).where(inArray(tujuan.misiId, misiIds)).orderBy(asc(tujuan.id));

  const tujuanByMisi = new Map<number, TujuanItem[]>();
  for (const item of tujuanRows) {
    if (item.misiId == null) {
      continue;
    }

    const existing = tujuanByMisi.get(item.misiId) ?? [];
    existing.push(item);
    tujuanByMisi.set(item.misiId, existing);
  }

  const misiByVisi = new Map<number, MisiItem[]>();
  for (const item of misiRows) {
    if (item.visiId == null) {
      continue;
    }

    const existing = misiByVisi.get(item.visiId) ?? [];
    existing.push({
      ...item,
      tujuan: tujuanByMisi.get(item.id) ?? [],
    });
    misiByVisi.set(item.visiId, existing);
  }

  return visiRows.map((item) => ({
    ...item,
    misi: misiByVisi.get(item.id) ?? [],
  }));
}