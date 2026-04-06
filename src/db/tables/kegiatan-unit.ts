import { integer, serial, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { kegiatan } from "./kegiatan";
import { unitKerja } from "./unit-kerja";

export const kegiatanUnit = appSchema.table("kegiatan_unit", {
  id: serial("id").primaryKey().notNull(),
  kegiatanId: integer("kegiatan_id"),
  unitId: integer("unit_id"),
}, (table) => [
  foreignKey({
    columns: [table.kegiatanId],
    foreignColumns: [kegiatan.id],
    name: "kegiatan_unit_kegiatan_id_fkey"
  }).onDelete("cascade"),
  foreignKey({
    columns: [table.unitId],
    foreignColumns: [unitKerja.id],
    name: "kegiatan_unit_unit_id_fkey"
  }).onDelete("cascade"),
]);