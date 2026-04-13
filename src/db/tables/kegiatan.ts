import { integer, serial, varchar, text, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { program } from "./program";

export const kegiatan = appSchema.table("kegiatan", {
  id: serial("id").primaryKey().notNull(),
  programId: integer("program_id"),
  kode: varchar("kode", { length: 20 }),
  namaKegiatan: text("nama_kegiatan").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.programId],
    foreignColumns: [program.id],
    name: "kegiatan_program_id_fkey"
  }).onDelete("cascade"),
]);