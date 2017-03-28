const db = require('./conn');

db.query(`
  CREATE TABLE tweets (
    id SERIAL,
    username VARCHAR(255),
    body VARCHAR(255),
    length INTEGER
  )
`).then(function() {
  console.log('Created table tweets');
  process.exit();
}).catch(function(error) {
  console.error(error);
  process.exit();
})
