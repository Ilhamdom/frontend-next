import { integer, serial, text, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";
import { periode } from "./periode";

export const visi = appSchema.table("visi", {
  id: serial("id").primaryKey().notNull(),
  periodeId: integer("periode_id"),
  visiText: text("visi_text").notNull(),
  createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.periodeId],
    foreignColumns: [periode.id],
    name: "visi_periode_id_fkey"
  }).onDelete("cascade"),
]);
