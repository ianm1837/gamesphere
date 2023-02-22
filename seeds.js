const { User, Comments, Games, Posts } = require('./models');
const sequelize = require('/config/connection');

const seedData = [
  {
    username: 'testUser1',
    password: 'testUser1Password',
    twoFactor: '2faData',
  },
  {
    username: 'testUser2',
    password: 'testUser2Password',
    twoFactor: '2faData',
  },
  {
    username: 'testUser3',
    password: 'testUser3Password',
    twoFactor: '2faData',
  },
  {
    username: 'testUser4',
    password: 'testUser4Password',
    twoFactor: '2faData',
  },
  {
    username: 'testUser5',
    password: 'testUser5Password',
    twoFactor: '2faData',
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();