const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();

const sessionInfo = {
  secret: 'session secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionInfo));

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(process.env.PORT || 3001, () => {
  console.log('Now listening');
});

// sequelize.sync({ force: false }).then(() => {
//   app.listen(process.env.PORT, () => console.log('Now listening'));
// });
