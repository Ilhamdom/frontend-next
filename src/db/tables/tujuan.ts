import { integer, text, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const tujuan = appSchema.table("tujuan", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  misiId: integer("misi_id"),
  kode: varchar("kode"),
  tujuanText: text("tujuan_text"),
});