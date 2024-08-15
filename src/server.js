const express = require('express');
const sequelize = require('./database/connection');
const routes = require('./routes/index');

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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

module.exports = app;
