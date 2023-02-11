const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');

// added by chris ridder for 2fa - 20230211123852
// >
const bodyParser = require("body-parser");
const uuid = require("uuid");
const speakeasy = require("speakeasy");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
var db = new JsonDB(new Config("myDataBase", true, false, '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/2fa", (req,res) => {
  res.json({ message: "Welcome to the two factor authentication exmaple" })
});
//  <
// added by chris ridder for 2fa - 20230211123852

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
