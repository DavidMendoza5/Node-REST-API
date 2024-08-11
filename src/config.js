/* eslint-disable no-undef */
process.loadEnvFile();

module.exports = {
    PORT = 3000,
    DATABASE_TYPE = 'postgres',
    DATABASE_HOST = 'localhost',
    DATABASE_PORT = 5432,
    DATABASE_NAME = 'database',
    DATABASE_USERNAME = 'username',
    DATABASE_PASSWORD = 'password',
    BCRYPT_HASH_ROUND = 2,
    DEFAULT_NAME = 'admin',
    DEFAULT_EMAIL = 'admin@gmail.com',
    DEFAULT_PASSWORD = 12345,
} = process.env;
