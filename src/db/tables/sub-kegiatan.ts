import { integer, serial, varchar, text, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { kegiatan } from "./kegiatan";

export const subKegiatan = appSchema.table("sub_kegiatan", {
  id: serial("id").primaryKey().notNull(),
  kegiatanId: integer("kegiatan_id"),
  kode: varchar("kode", { length: 20 }),
  namaSubKegiatan: text("nama_sub_kegiatan"),
  output: text("output"),
}, (table) => [
  foreignKey({
    columns: [table.kegiatanId],
    foreignColumns: [kegiatan.id],
    name: "sub_kegiatan_kegiatan_id_fkey"
  }).onDelete("cascade"),
]);