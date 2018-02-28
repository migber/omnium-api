'use strict';
module.exports = (sequelize, DataTypes) => {
  var Race = sequelize.define('Race', {
    elapseTime: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avgSpeed: DataTypes.DECIMAL,
    description: DataTypes.STRING
  }, {});
  Race.associate = function(models) {
    // associations can be defined here
    Race.hasMany(models.Score, {
      foreignKey: 'RaceId',
      onDelete: 'CASCADE'
    }),
    Race.belongsTo(models.Omnium, {
      foreignKey: 'OmniumId',
      ondelete: 'CASCADE'
    })
  };
  return Race;
};