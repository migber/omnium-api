'use strict';
module.exports = (sequelize, DataTypes) => {
  var Score = sequelize.define('Score', {
    raceNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lapPlusPoints: DataTypes.INTEGER,
    lapMinusPoints: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    finishPlace: DataTypes.INTEGER,
    raceDate: DataTypes.DATE,
    place: DataTypes.INTEGER,
    totalPoints: DataTypes.INTEGER,
    dns: DataTypes.BOOLEAN,
    dnq: DataTypes.BOOLEAN,
    dnf: DataTypes.BOOLEAN,
    bk: DataTypes.BOOLEAN
  }, {});
  Score.associate = function(models) {
    // associations can be defined here
    Score.belongsTo(models.Cyclist, {
      foreignKey: 'CyclistId',
      onDelete: 'CASCADE'
    }),
    Score.belongsTo(models.Race, {
      foreignKey: 'RaceId',
      onDelete: 'CASCADE'
    })
  };
  return Score;
};