'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    approved: DataTypes.BOOLEAN,
    accessToken: DataTypes.STRING(100),
    lastlogedIn: DataTypes.DATE,
    firstlogedIn: DataTypes.DATE,
    submitted: DataTypes.INTEGER(100000),
    phone: DataTypes.STRING(20),
    name: DataTypes.STRING(40),
    surname: DataTypes.STRING(100),
  }, {})
  User.associate = function associations(models) {
    // associations can be defined here
  }
  return User
}
