const sequelize = require('../config/connection');
const seedUsers = require('./userSeed');
const { User } = require("../models");
const postSeed = require('./postSeed');
const commentSeed = require('./commentSeed.js');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  await postSeed();
  console.log('\n----- POSTS SEEDED -----\n');

  await commentSeed();
  console.log('\n----- comments SEEDED -----\n');

  process.exit(0);
}

seedAll();

