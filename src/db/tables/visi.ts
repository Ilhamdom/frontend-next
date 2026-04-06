import { integer, text, timestamp } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const visi = appSchema.table("visi", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  periodeId: integer("periode_id"),
  visiText: text("visi_text"),
  createdAt: timestamp("created_at", { mode: "date" }),
});
