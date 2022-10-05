import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres({
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});

export async function getOrigamiList() {
  const origamiFigures = await sql`
  SELECT * FROM origami`;
  return origamiFigures;
}

// export async function getOrigamiById(id) {
//   const origamiFigures = await sql`
//   SELECT * FROM origami WHERE id = ${id}`;
//   return origamiFigures[0];
// }
