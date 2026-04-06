import { integer, numeric, text, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const indikatorKinerja = appSchema.table("indikator_kinerja", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  sasaranId: integer("sasaran_id"),
  kode: varchar("kode"),
  namaIndikator: text("nama_indikator"),
  satuan: varchar("satuan"),
  jenis: varchar("jenis"),
  baseline: numeric("baseline"),
});