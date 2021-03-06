'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_items', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2
      },
      {
        order_id: 2,
        product_id: 2,
        quantity: 3
      },
      {
        order_id: 3,
        product_id: 3,
        quantity: 1
      },
      {
        order_id: 3,
        product_id: 1,
        quantity: 1
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_items', null, {});
  }
};
