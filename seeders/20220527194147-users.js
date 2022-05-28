'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        full_name: 'Jack Daniels',
        country_code: 123,
      },
      {
        full_name: 'John Smith',
        country_code: 321,
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
