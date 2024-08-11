const { BCRYPT_HASH_ROUND, DEFAULT_PASSWORD } = require('../config');

const bcrypt = require('bcryptjs');

const encryptPassword = async (password = DEFAULT_PASSWORD) => {
    const rounds = BCRYPT_HASH_ROUND;
    return bcrypt.hash(password, Number(rounds));
};

module.exports = encryptPassword;
