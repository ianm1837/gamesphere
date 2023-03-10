const User = require('./User');
const Games = require('./Games');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Games, {
  foreignKey: 'user_id',
});

Games.belongsTo(User, {
  foreignKey: 'user_id',
});

Games.hasMany(Posts, {
  foreignKey: 'game_id',
});

Posts.belongsTo(Games, {
  foreignKey: 'game_id',
});

User.hasMany(Posts, {
  foreignKey: 'user_id',
});

Posts.belongsTo(User, {
  foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
  foreignKey: 'post_id',
});

Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Posts, Games, Comments };
