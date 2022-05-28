"use strict";

const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().min(1),
  merchant_id: Joi.number().required().min(1),
  price: Joi.number().required().min(1),
  status: Joi.string().required().min(1)
});
