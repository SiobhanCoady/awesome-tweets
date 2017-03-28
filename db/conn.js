const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  database: 'tweets'
});

module.exports = db;
