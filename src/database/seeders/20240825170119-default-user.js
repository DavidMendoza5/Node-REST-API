'use strict';
const { User, Roles } = require('../models');
const ROLES = require('../../constants/roles.enums');
const { DEFAULT_EMAIL } = require('../../config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        const adminRole = await Roles.findOne({ where: { name: ROLES.ADMIN } });

        if (adminRole) {
            await User.update(
                { roleId: adminRole.id },
                { where: { email: DEFAULT_EMAIL } },
            );
        }
    },

    async down (queryInterface, Sequelize) {
        await User.update(
            { roleId: null },
            { where: { email: DEFAULT_EMAIL } },
        );
    },
};
