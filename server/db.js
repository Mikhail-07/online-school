const {Sequelize} = require('sequelize');
const {Pool} = require()

const pool = new Pool({
  connectionString: "postgres://default:BPawHjy1FU3Z@ep-raspy-star-a2fszb1r-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

module.exports = new Sequelize(
  // подключение базы
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  // {
  //   dialect: 'postgres',
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT
  // }

  // подключение базы vercel
  pool
)