const express = require('express');
const sequelize = require('./database/connection');

const app = express();

const createConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

createConnection();

app.get('/', (req, res) => res.send('HOLA MUNDO'));

module.exports = app;
