import { boolean, integer, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { appSchema } from "./base";

export const users = appSchema.table("users", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  nama: varchar("nama"),
  email: varchar("email"),
  passwordHash: text("password_hash"),
  roleId: integer("role_id"),
  unitId: integer("unit_id"),
  isActive: boolean("is_active"),
  createdAt: timestamp("created_at", { mode: "date" }),
  updatedAt: timestamp("updated_at", { mode: "date" }),
});