import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

// sql is ALWAYS A PROMISE!

console.log(
  await sql`
SELECT * FROM origami`,
);

// just for testing
await sql.end();
