const path = require('path');
const express = require('express');
const routes = require('./controllers');
const expressSession = require('express-session');
const expressSessionInfo = require('./config/expressSessionInfo');
const expressHandlebars = require('express-handlebars');
const dbInit = require('./config/dbInit');
const debugHelper = require('./helpers/debugHelper');

// initialize the database if it doesn't exist
dbInit();

// import sequelize connection
const sequelize = require('./config/connection');

// initialize express app
const app = express();

// import helpers from helpers/ and initialize handlebars
const hbs = expressHandlebars.create({ helpers: debugHelper });

// set up handlebars.js engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

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
