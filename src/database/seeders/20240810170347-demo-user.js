'use strict';
const encryptPassword = require('../../utils/encrypt');
const { DEFAULT_NAME, DEFAULT_EMAIL } = require('../../config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: DEFAULT_NAME,
            email: DEFAULT_EMAIL,
            createdAt: new Date(),
            updatedAt: new Date(),
            password: await encryptPassword(),
        }], {});
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', { email: DEFAULT_EMAIL }, {});
    },
};
