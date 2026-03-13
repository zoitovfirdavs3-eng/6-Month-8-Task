require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
});

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("DB successfully connected!");
    await sequelize.sync();
  } catch (err) {
    if (err instanceof Error) {
      console.log(`DB connection error: ${err.message}`);
      throw err;
    }
  }
}

module.exports = { sequelize, dbConnection };