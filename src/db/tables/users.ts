import { boolean, integer, serial, text, timestamp, varchar, foreignKey, unique } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { appSchema } from "./base";
import { roles } from "./roles";
import { unitKerja } from "./unit-kerja";

export const users = appSchema.table("users", {
  id: serial("id").primaryKey().notNull(),
  nama: varchar("nama", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  roleId: integer("role_id"),
  unitId: integer("unit_id"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.roleId],
    foreignColumns: [roles.id],
    name: "users_role_id_fkey"
  }),
  foreignKey({
    columns: [table.unitId],
    foreignColumns: [unitKerja.id],
    name: "users_unit_id_fkey"
  }),
  unique("users_email_key").on(table.email),
]);