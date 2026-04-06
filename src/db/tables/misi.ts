import { integer, text, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const misi = appSchema.table("misi", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  visiId: integer("visi_id"),
  kode: varchar("kode"),
  misiText: text("misi_text"),
});