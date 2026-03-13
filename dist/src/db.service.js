"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME || "database", process.env.DB_USER || "user", process.env.DB_PASSWORD || "password", {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
});
module.exports = sequelize;
