import { integer, text, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const sasaranStrategis = appSchema.table("sasaran_strategis", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  tujuanId: integer("tujuan_id"),
  kode: varchar("kode"),
  sasaranText: text("sasaran_text"),
});