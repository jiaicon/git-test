'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'token',
        Sequelize.STRING(255)
      ),
      queryInterface.addColumn(
        'Users',
        'password',
        Sequelize.STRING(255)
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn(
        'users',
        'token',
      ),
      queryInterface.removeColumn(
        'Users',
        'password',
      )
    ]);
  }
};
