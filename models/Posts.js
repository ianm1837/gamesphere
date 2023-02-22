const sequelize = require('../config/connection');
const { Model, DataTypes} = require('sequelize');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:'user',
                key: 'id',
            },
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'games',
                key: 'id',
            }
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }    
);

module.exports = Posts; 