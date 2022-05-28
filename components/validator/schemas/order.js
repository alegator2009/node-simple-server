"use strict";

const Joi = require("joi");

module.exports = Joi.object({
  user_id: Joi.number().required().min(1),
  status: Joi.string().required().min(1)
});
