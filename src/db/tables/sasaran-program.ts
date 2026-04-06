import { integer, serial, varchar, text, foreignKey } from "drizzle-orm/pg-core";
import { appSchema } from "./base";
import { program } from "./program";

export const sasaranProgram = appSchema.table("sasaran_program", {
  id: serial("id").primaryKey().notNull(),
  programId: integer("program_id"),
  kode: varchar("kode", { length: 20 }),
  sasaranText: text("sasaran_text").notNull(),
}, (table) => [
  foreignKey({
    columns: [table.programId],
    foreignColumns: [program.id],
    name: "sasaran_program_program_id_fkey"
  }).onDelete("cascade"),
]);