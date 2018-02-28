'use strict';
module.exports = (sequelize, DataTypes) => {
  var Omnium = sequelize.define('Omnium', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    positionBefore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currentPosition: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Omnium.associate = function(models) {
    // associations can be defined here
    Omnium.hasMany(models.Race, {
      foreignKey: 'OmniumId',
      onDelete: 'CASCADE'
    })
  };
  return Omnium;
};