'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cyclist = sequelize.define('Cyclist', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uciCode: {
      type: DataTypes.INTEGER,
      unique: true
    },
    team: DataTypes.STRING,
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Cyclist.associate = function(models) {
    // associations can be defined here
    Cyclist.hasMany(models.Score, {
      foreignKey: 'CyclistId',
      onDelete: 'CASCADE'
    })
  };
  return Cyclist;
};