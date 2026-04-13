import { integer, serial, text, timestamp, varchar, foreignKey, unique } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";


export const users = appSchema.table("users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  alias: varchar("alias", { length: 255 }),
  unit_kerja: text("unit_kerja"),
  role_id: integer("role_id"),
  role: varchar("role", { length: 255 }),
  created_at: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
});