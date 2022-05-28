"use strict";

const schemas = require("./schemas");

module.exports = (schema, data) => {
  const { error } = schemas[schema].validate(data);
  if (error) {
    throw error;
  }
};
