"use strict";

var models  = require('../models');

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {

        title:  {
            type: DataTypes.STRING,
            validate: {
                notNull: false
            }
        },
        description: DataTypes.STRING,
        category: DataTypes.STRING,
        startDate: DataTypes.DATE,
        location:  DataTypes.STRING,
        longitude: DataTypes.STRING,
        latitude: DataTypes.STRING,
        position: DataTypes.DATE,
        visibility: {
            type: DataTypes.ENUM,
            values: ['Все', 'Друзья'],
            defaultValue: 'Друзья'
        }

  },{
    classMethods: {
      associate: function(models) {
        Event.hasMany(models.Comment, {
            as: 'comments',
            constraints: false
        });
        Event.belongsTo(models.User, {
            as: 'owner',
            constraints: false
        });
        Event.hasMany(models.User, {
            as: 'joinedUsers',
            constraints: false
        });
        Event.hasMany(models.User, {
            as: 'invitedUsers',
            constraints: false
        });
      }
    }
  });

  return Event;
};