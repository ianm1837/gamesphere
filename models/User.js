const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
    passwordCheck(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: FALSE,
            autoIncrement: TRUE,
            primaryKey: TRUE,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: FALSE,
            validate: {
                len: [8],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: FALSE,
            validate: {
                len: [8],
            },
        },
        twoFactor: {
            type: DataTypes.STRING,
            allowNull: FALSE,
            validate: {
                len: [4],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize, 
        timestamps: FALSE,
        freezeTableName: TRUE,
        underscored: TRUE,
        modelName: 'user',
    }
);

module.exports = User;