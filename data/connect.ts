import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// const sql = postgres({
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// });

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase();

export type Origami = {
  id: number;
  name: string;
  price: number;
  activePrice: number;
  secondColor: string;
  firstPicture: string;
  secondPicture: string;
  activePicture: string;
  difficulty: number;
  count: number;
};

export async function getOrigamiList() {
  const origamiFigures = await sql<Origami[]>`
  SELECT * FROM origami`;
  return origamiFigures;
}

// export async function getOrigamiById(id) {
//   const origamiFigures = await sql`
//   SELECT * FROM origami WHERE id = ${id}`;
//   return origamiFigures[0];
// }
