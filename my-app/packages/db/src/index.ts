import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { todos } from "./schema";

const { Pool } = pkg; 

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);
export { todos };
