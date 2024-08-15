const jwt = require('jsonwebtoken');

const generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXP || '1h',
    });
};

module.exports = generateToken;
