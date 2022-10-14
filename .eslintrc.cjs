// require('dotenv-safe').config({
//   path: './.env',
// });

module.exports = {
  extends: ['@upleveled/upleveled'],
  // plugins: ['@ts-safeql/es-lint-plugin'],
  // rules: {
  //   '@ts-safeql/check-sql': [
  //     'error',
  //     {
  //       connections: [
  //         {
  //           databaseUrl:
  //             'postgres://username:password@localhost:5432/database',
  //           tagname: 'sql',
  //           fieldTransform: 'camel',
  //           transform: '${type}[]',
  //         },
  //       ],
  //     },
  //   ],
  // },
};
