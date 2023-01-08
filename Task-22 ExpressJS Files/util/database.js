const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_schema', 'root', 'Sumal@777', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
