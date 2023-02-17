const dbConfig = require(`../config/connection`);
const Sequelize = require(`sequelize`);

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = db;