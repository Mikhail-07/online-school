const {Sequelize} = require('sequelize');

module.exports = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

  // подключение базы
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  // {
  //   dialect: 'postgres',
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT
  // }
