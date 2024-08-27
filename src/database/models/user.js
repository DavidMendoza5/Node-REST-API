'use strict';
const {
    Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate (models) {
            User.belongsTo(models.Roles, {
                foreignKey: {
                    allowNull: true,
                },
                as: 'role',
            });
        }
    }
    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        is_admin: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
