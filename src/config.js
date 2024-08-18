require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 6000,
    DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_PORT: process.env.DATABASE_PORT || '5432',
    DATABASE_NAME: process.env.DATABASE_NAME || 'database_name',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
    BCRYPT_HASH_ROUND: process.env.BCRYPT_HASH_ROUND || '1',
    DEFAULT_NAME: process.env.DEFAULT_NAME || 'name',
    DEFAULT_EMAIL: process.env.DEFAULT_EMAIL || 'email@email.com',
    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD || '12345',
};
