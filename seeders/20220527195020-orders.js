'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 1,
        status: "new",
      },
      {
        user_id: 1,
        status: "shipped",
      },
      {
        user_id: 2,
        status: "closed",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
