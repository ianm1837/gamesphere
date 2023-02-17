const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: FALSE,
            autoIncrement: TRUE,
            primaryKey: TRUE,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: FALSE,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: FALSE,
            defaultValue: DataTypes.NOW,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: FALSE,
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: post,
            key: 'id',
          }
        }
    },
    {
        sequelize,
        timestamps: FALSE,
        freezeTableName: TRUE,
        underscored: TRUE,
        modelName: 'comments'
    }
);

module.exports = Comments;