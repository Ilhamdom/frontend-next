import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
const databaseSchema = "sireva";

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

export const pool = new Pool({
  connectionString,
  options: `-c search_path=${databaseSchema},public`,
});

export const db = drizzle(pool, { schema });