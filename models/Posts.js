const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: FALSE,
            autoIncrement: TRUE,
            primaryKey: TRUE,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: FALSE,
            references: {
                model:'user',
                key: 'id',
            },
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: FALSE,
            defaultValue: DataTypes.NOW,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: FALSE,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: FALSE,
        },
    },
    {
        sequelize, 
        timestamps: FALSE,
        freezeTableName: TRUE,
        underscored: TRUE,
        modelName: 'posts',
    }    
);

module.exports = Posts; 