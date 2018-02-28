'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RaceId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Races',
          key: 'id'
        }
      },
      CyclistId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Cyclists',
          key: 'id'
        }
      },
      raceNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lapPlusPoints: {
        type: Sequelize.INTEGER
      },
      lapMinusPoints: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.INTEGER
      },
      finishPlace: {
        type: Sequelize.INTEGER
      },
      raceDate: {
        type: Sequelize.DATE
      },
      place: {
        type: Sequelize.INTEGER
      },
      totalPoints: {
        type: Sequelize.INTEGER
      },
      dnf: {
        type: Sequelize.BOOLEAN
      },
      dns: {
        type: Sequelize.BOOLEAN
      },
      dnq: {
        type: Sequelize.BOOLEAN
      },
      bk: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scores');
  }
};