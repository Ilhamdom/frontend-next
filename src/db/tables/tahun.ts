import { integer, serial, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { periode } from "./periode";

export const tahun = appSchema.table("tahun", {
  id: serial("id").primaryKey().notNull(),
  tahun: integer("tahun").notNull(),
  periodeId: integer("periode_id"),
}, (table) => [
  foreignKey({
    columns: [table.periodeId],
    foreignColumns: [periode.id],
    name: "tahun_periode_id_fkey"
  }).onDelete("cascade"),
]);