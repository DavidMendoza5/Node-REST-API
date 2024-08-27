'use strict';
const ROLES = require('../../constants/roles.enums');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Roles', [{
            name: ROLES.ADMIN,
            key: 'ADMIN',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Roles', { key: 'ADMIN' }, {});
    },
};
