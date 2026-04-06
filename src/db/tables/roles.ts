import { integer, serial, varchar, text, unique } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const roles = appSchema.table("roles", {
  id: serial("id").primaryKey().notNull(),
  namaRole: varchar("nama_role", { length: 50 }).notNull(),
  deskripsi: text("deskripsi"),
}, (table) => [
  unique("roles_nama_role_key").on(table.namaRole),
]);