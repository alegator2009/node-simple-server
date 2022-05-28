'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Coconut',
        merchant_id: 1,
        price: 1,
        status: "in_stock"
      },
      {
        name: 'Banana',
        merchant_id: 2,
        price: 5,
        status: "in_stock"
      },
      {
        name: 'Kivi',
        merchant_id: 3,
        price: 3,
        status: "out_of_stock"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
