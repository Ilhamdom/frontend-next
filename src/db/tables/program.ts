import { integer, serial, varchar, text, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { sasaranStrategis } from "./sasaran-strategis";

export const program = appSchema.table("program", {
  id: serial("id").primaryKey().notNull(),
  sasaranId: integer("sasaran_id"),
  kode: varchar("kode", { length: 20 }),
  namaProgram: text("nama_program").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.sasaranId],
    foreignColumns: [sasaranStrategis.id],
    name: "program_sasaran_id_fkey"
  }).onDelete("cascade"),
]);