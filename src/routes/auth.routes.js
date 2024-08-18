const { Router } = require('express');

const api = Router();

const authController = require('../controllers/auth.controller');

api.post('/login', authController.logIn);

module.exports = api;
