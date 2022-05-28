"use strict";

const Joi = require("joi");

module.exports = Joi.object({
  order_id: Joi.number().required().min(1),
  product_id: Joi.number().required().min(1),
  quantity: Joi.number().required().min(1)
});
