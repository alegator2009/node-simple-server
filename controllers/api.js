'use strict';

const db = require("../models");
const validate = require("../components/validator");
const ValidationError = require("../errors/ValidationError");

class Api {
  async getProducts(req, res) {
      const data = await db.Product.findAll();
      return res.send({data});
  }

  async getOrderProducts(req, res, next) {
    try {
      const order = await db.Order.findByPk(req.params.id);
      if (!order) {
        throw new ValidationError("Order is not found");
      }
      const productsIds = (await db.OrderItem.findAll({where: {order_id: order.id}})).map((item) => item.product_id);
      const data = productsIds.length
        ? await db.Product.findAll({where: {id: {[db.Sequelize.Op.in]: productsIds}}})
        : [];

      return res.send({data});
    }
    catch (e) {
      next(e);
    }
  }

  async createProduct(req, res, next) {
    try {
      validate("product", req.body);
      const created = await db.Product.create(req.body);
      const data = created && created.id ? await db.Product.findByPk(created.id) : {};

      return res.status(201).send({data});
    }
    catch (e) {
      next(e);
    }
  }

  async createOrder(req, res, next) {
    try {
      validate("order", req.body);
      const usersIds = (await db.User.findAll()).map((user) => user.id);
      if (!usersIds.includes(parseInt(req.body.user_id, 10))) {
        throw new ValidationError("User not found");
      }
      const created = await db.Order.create(req.body);
      const data = created && created.id ? await db.Order.findByPk(created.id) : {};

      return res.status(201).send({data});
    }
    catch (e) {
      next(e);
    }
  }

  async addProductToOrder(req, res, next) {
    try {
      const item = Object.assign({}, req.params, req.body);
      validate("orderItems", item);
      const ordersIds = (await db.Order.findAll()).map((order) => order.id);
      if (!ordersIds.includes(parseInt(item.order_id, 10))) {
        throw new ValidationError("Order not found");
      }
      const productsIds = (await db.Product.findAll()).map((product) => product.id);
      if (!productsIds.includes(parseInt(item.product_id, 10))) {
        throw new ValidationError("Product not found");
      }

      const addedProduct = await db.OrderItem.findOne({
        where: {order_id: item.order_id, product_id: item.product_id}
      });
      let data;
      if (addedProduct) {
        await db.OrderItem.update(
          {quantity: addedProduct.quantity + parseInt(item.quantity, 10)},
          {where: {id: addedProduct.id}}
        );
        data = await db.OrderItem.findOne({
          where: {order_id: item.order_id, product_id: item.product_id}
        });
      } else {
        data = await db.OrderItem.create(item);
      }

      return res.status(201).send({data});
    }
    catch (e) {
      next(e);
    }
  }
}

module.exports = Api;
