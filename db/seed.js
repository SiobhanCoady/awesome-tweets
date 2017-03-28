const db = require('./conn');
const faker = require('faker');

for (let i = 0; i < 20; i++) {
  let body = faker.hacker.phrase();
  let length = body.length;
  db.query(`
    INSERT INTO tweets (username, body, length) VALUES ($<username>, $<body>, $<length>)
  `, {
    username: faker.name.findName(),
    body: body,
    length: length
  }
  ).then(function() {
      console.log(`Tweet created`);
      // only exit node on the last insert
      if (i === 19) process.exit();
    })
}
