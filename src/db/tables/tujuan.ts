import { integer, serial, text, varchar, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { misi } from "./misi";

export const tujuan = appSchema.table("tujuan", {
  id: serial("id").primaryKey().notNull(),
  misiId: integer("misi_id"),
  kode: varchar("kode", { length: 10 }),
  tujuanText: text("tujuan_text").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.misiId],
    foreignColumns: [misi.id],
    name: "tujuan_misi_id_fkey"
  }).onDelete("cascade"),
]);