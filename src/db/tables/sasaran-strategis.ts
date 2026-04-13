import { integer, serial, text, varchar, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { tujuan } from "./tujuan";

export const sasaranStrategis = appSchema.table("sasaran_strategis", {
  id: serial("id").primaryKey().notNull(),
  tujuanId: integer("tujuan_id"),
  kode: varchar("kode", { length: 10 }),
  sasaranText: text("sasaran_text").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.tujuanId],
    foreignColumns: [tujuan.id],
    name: "sasaran_strategis_tujuan_id_fkey"
  }).onDelete("cascade"),
]);