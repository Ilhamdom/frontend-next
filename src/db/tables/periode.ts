import { integer, serial, varchar, boolean } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const periode = appSchema.table("periode", {
  id: serial("id").primaryKey().notNull(),
  nama: varchar("nama", { length: 20 }),
  tahunMulai: integer("tahun_mulai"),
  tahunSelesai: integer("tahun_selesai"),
  isActive: boolean("is_active").default(true),
});