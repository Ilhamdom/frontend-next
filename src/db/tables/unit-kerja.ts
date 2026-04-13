import { integer, serial, varchar, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const unitKerja = appSchema.table("unit_kerja", {
  id: serial("id").primaryKey().notNull(),
  namaUnit: varchar("nama_unit", { length: 255 }),
  parentId: integer("parent_id"),
}, (table) => [
  foreignKey({
    columns: [table.parentId],
    foreignColumns: [table.id],
    name: "unit_kerja_parent_id_fkey"
  }),
]);