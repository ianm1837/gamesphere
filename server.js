const path = require('path');
const express = require('express');
const routes = require('./controllers');
const expressSession = require('express-session');
const expressSessionInfo = require('./config/expressSessionInfo');
const expressHandlebars = require('express-handlebars');
const dbInit = require('./config/dbInit');

// initialize the database
dbInit();

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();

// set up handlebars.js engine
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

// set up sessions
app.use(expressSession(expressSessionInfo));

// set up routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => console.log('Now listening'));
});
