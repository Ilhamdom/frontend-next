import { integer, serial, numeric, timestamp, foreignKey, unique } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";
import { indikatorKinerja } from "./indikator-kinerja";
import { tahun } from "./tahun";

export const targetIndikator = appSchema.table("target_indikator", {
  id: serial("id").primaryKey().notNull(),
  indikatorId: integer("indikator_id"),
  tahunId: integer("tahun_id"),
  target: numeric("target"),
  realisasi: numeric("realisasi"),
  createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.indikatorId],
    foreignColumns: [indikatorKinerja.id],
    name: "target_indikator_indikator_id_fkey"
  }).onDelete("cascade"),
  foreignKey({
    columns: [table.tahunId],
    foreignColumns: [tahun.id],
    name: "target_indikator_tahun_id_fkey"
  }).onDelete("cascade"),
  unique("target_indikator_indikator_id_tahun_id_key").on(table.indikatorId, table.tahunId),
]);