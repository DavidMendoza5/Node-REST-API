const { Router } = require('express');
const api = Router();

const authRoutes = require('./auth.routes');

api.use(authRoutes);

module.exports = api;
