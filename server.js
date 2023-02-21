const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const dbInit = require('./config/dbInit');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const multer = require('multer')

const routes = require('./controllers');

dbInit()

const sequelize = require('./config/connection');

const app = express();

const sessionInfo = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 86400000, //24 hours in milliseconds
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

var storage = multer.diskStorage({
  destination: './public/game-images',
  filename: function (req, file, callback) {

  }
  }
)

app.use(session(sessionInfo));

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.APP_PORT, () => console.log('Now listening'));
});
