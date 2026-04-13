import { integer, serial, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const sumberDana = appSchema.table("sumber_dana", {
  id: serial("id").primaryKey().notNull(),
  nama: varchar("nama", { length: 50 }),
});