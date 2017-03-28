const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');

router.get('/', function(req, res, next) {
  res.render('index');
})

router.get('/dashboard', function(req, res, next) {
  // // Using cookies...
  // let tweets;
  // if (req.cookies.tweets) {
  //   tweets = req.cookies.tweets;
  // } else {
  //   tweets = null;
  // }
  // res.render('dashboard', { tweets: tweets });

  // Using database...
  db.query(`SELECT * FROM tweets ORDER BY length`)
    .then(function(tweets) {
      res.render('dashboard', {tweets: tweets});
    })
    .catch(function(err) {
      res.send(err);
    });
})

router.post('/dashboard', function(req, res, next) {
  // // Using cookies...
  // let tweets;
  // if (req.cookies.tweets) {
  //   tweets = req.cookies.tweets;
  // } else {
  //   tweets = [];
  // }
  // let newTweet = req.body;
  // newTweet.length = newTweet.body.length;
  // tweets.push(newTweet);
  // // console.log(tweets);
  // res.cookie('tweets', tweets);
  // res.redirect('dashboard');

  // Using database...
  let newTweet = req.body;
  newTweet.length = newTweet.body.length;
  console.log(newTweet);
  db.query(`
    INSERT INTO tweets (username, body, length) VALUES ($<username>, $<body>, $<length>)
    `, newTweet
  ).then(function() {
    res.redirect('dashboard');
  }).catch(function(err) { res.send(err) })
})

module.exports = router;
