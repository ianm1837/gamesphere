const path = require('path');
const express = require('express');
const routes = require('./controllers');
const expressSession = require('express-session');
const expressSessionInfo = require('./config/expressSessionInfo');
const expressHandlebars = require('express-handlebars');
const dbInit = require('./config/dbInit');
const helpers = require('./helpers/index.js');

// initialize the database if it doesn't exist
dbInit();

// import sequelize connection
const sequelize = require('./config/connection');

// initialize express app
const app = express();

// set up handlebars.js engine
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

// import helpers from helpers/index.js and initialize handlebars
expressHandlebars.create({ helpers: helpers });

// set up sessions (cookies)
app.use(expressSession(expressSessionInfo));

// set up middleware and set routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// turn on connection to database with sequelize and start express server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => console.log('Now listening'));
});
