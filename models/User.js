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
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        twoFactor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4],
            },
        },
        followedGames: {
            type: DataTypes.TEXT('long'),
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;