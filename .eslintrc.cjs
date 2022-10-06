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
            databaseUrl:
              ' postgres : // next_js_ecommerce : next_js_ecommerce @ localhost : 5432 / next_js_ecommerce ',
            tagName: ' sql ',
            fieldTransform: ' camel ',
            transform: ' $ { type } [ ] ',
          },
        ],
      },
    ],
  },
};
