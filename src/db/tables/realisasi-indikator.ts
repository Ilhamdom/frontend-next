import { integer, serial, varchar, numeric, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";
import { unitKerja } from "./unit-kerja";

export const realisasiIndikator = appSchema.table("realisasi_indikator", {
  id: serial("id").primaryKey().notNull(),
  indikatorKode: varchar("indikator_kode", { length: 50 }),
  unitId: integer("unit_id"),
  tahun: integer("tahun"),
  bulan: integer("bulan"),
  triwulan: integer("triwulan"),
  target: numeric("target"),
  realisasi: numeric("realisasi"),
  createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.unitId],
    foreignColumns: [unitKerja.id],
    name: "realisasi_indikator_unit_id_fkey"
  }),
]);