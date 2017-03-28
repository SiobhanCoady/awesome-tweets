// Quiz
// Build an app, Awesome Tweets, with Node based on the wireframes below:
//
// Set up a running node app with a basic home page showing a navbar, background image of
// your choosing as shown in the home page wireframe. (30%)
// Build the dashboard page mobile first. Use dummy data to populate the tweets. (20%)
// Make the dashboard responsive. Use the dashboard desktop wireframe as a basis. (20%)
// Implement the ability to create tweets by submitting the form and storing them in cookies.
// Tweets should have a username and a body. The body should be restricted to a length of 255
// characters. (15%)
// List the tweets stored in cookies below the tweet form as shown in the dashboard
// wireframes. (%15)
// Bonus
// Display the message in order of tweet body character length. (%5)
// Instead, save and retrieve the messages from Postgres SQL. (%5)
// The quiz's score is capped at 100%. The bonus questions can help you get there, but are
// entirely optional.

// Note:
// This app uses the following packages: express, morgan, ejs, body-parser,
// cookie-parser, nodemon, pg-promise, faker.
// The postgres database is set up to have the namae "tweets".

const PORT = 4000;
const path = require('path');
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');
const app = Express();

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', home);

app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
});
