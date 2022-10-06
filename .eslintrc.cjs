require('dotenv-safe').config({
  path: './.env',
});

module.exports = {
  extends: ['@upleveled/upleveled'],
  plugins: [' @ ts - safeql / eslint - plugin '],
  rules: {
    ' @ ts - safeql / check - sql ': [
      ' error ',
      {
        connections: [
          {
            databaseUrl: ` postgres : // ${PGUSERNAME} : ${PGPASSWORD} @ localhost : 5432 / ${PGDATABASE} `,
            tagName: ' sql ',
            fieldTransform: ' camel ',
            transform: ' $ { type } [ ] ',
          },
        ],
      },
    ],
  },
};
