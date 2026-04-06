import { integer, serial, numeric, text, varchar, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { sasaranStrategis } from "./sasaran-strategis";

export const indikatorKinerja = appSchema.table("indikator_kinerja", {
  id: serial("id").primaryKey().notNull(),
  sasaranId: integer("sasaran_id"),
  kode: varchar("kode", { length: 20 }),
  namaIndikator: text("nama_indikator").notNull(),
  satuan: varchar("satuan", { length: 50 }),
  jenis: varchar("jenis", { length: 50 }),
  baseline: numeric("baseline"),
}, (table) => [
  foreignKey({
    columns: [table.sasaranId],
    foreignColumns: [sasaranStrategis.id],
    name: "indikator_kinerja_sasaran_id_fkey"
  }).onDelete("cascade"),
]);