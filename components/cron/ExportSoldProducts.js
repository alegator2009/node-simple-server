"use strict";

const db = require("../../models");
const { Op } = require("sequelize");
const config = require("../../config/config.syncer.json");
const syncers = require("../syncer");

class ExportSoldProducts {
  async run() {
    console.log("-----------ExportSoldProducts Job started--------------");
    if (Object.keys(config).length) {
      const products = {};
      (await db.Product.findAll()).forEach(product => products[product.id] = {
        id: product.id,
        name: product.name,
        count: 0,
        date: new Date()
      });
      (await db.OrderItem.findAll({where: {product_id: {[Op.in]: Object.keys(products)}}}))
        .forEach(item => products[item.product_id].count += item.quantity);

      const productsCount = Object.keys(products).length;
      console.log(`${productsCount} records collected`);

      if (productsCount && config.hasOwnProperty("airtable")) {
        const airtable = new syncers.Airtable(config.airtable);
        await airtable.sync(Object.values(products));
      }
    }
    else {
      console.log("No active syncers in config");
    }
  }
}

module.exports = ExportSoldProducts;
