import { integer, serial, varchar, numeric, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";
import { program } from "./program";
import { kegiatan } from "./kegiatan";
import { tahun } from "./tahun";

export const pendanaan = appSchema.table("pendanaan", {
  id: serial("id").primaryKey().notNull(),
  programId: integer("program_id"),
  kegiatanId: integer("kegiatan_id"),
  tahunId: integer("tahun_id"),
  sumberDana: varchar("sumber_dana", { length: 50 }),
  pagu: numeric("pagu"),
  realisasi: numeric("realisasi"),
  createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.kegiatanId],
    foreignColumns: [kegiatan.id],
    name: "pendanaan_kegiatan_id_fkey"
  }).onDelete("cascade"),
  foreignKey({
    columns: [table.programId],
    foreignColumns: [program.id],
    name: "pendanaan_program_id_fkey"
  }).onDelete("cascade"),
  foreignKey({
    columns: [table.tahunId],
    foreignColumns: [tahun.id],
    name: "pendanaan_tahun_id_fkey"
  }).onDelete("cascade"),
]);