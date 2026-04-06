import { integer, serial, text, varchar, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { visi } from "./visi";

export const misi = appSchema.table("misi", {
  id: serial("id").primaryKey().notNull(),
  visiId: integer("visi_id"),
  kode: varchar("kode", { length: 10 }),
  misiText: text("misi_text").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.visiId],
    foreignColumns: [visi.id],
    name: "misi_visi_id_fkey"
  }).onDelete("cascade"),
]);