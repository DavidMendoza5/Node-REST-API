const { Sequelize } = require('sequelize');
const { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME, DATABASE_NAME } = require('../config');

const sequelize = new Sequelize(`${DATABASE_NAME}`, `${DATABASE_USERNAME}`, `${DATABASE_PASSWORD}`, {
    host: `${DATABASE_HOST}`,
    dialect: 'postgres',
    port: Number(`${DATABASE_PORT}`),
});

module.exports = sequelize;
