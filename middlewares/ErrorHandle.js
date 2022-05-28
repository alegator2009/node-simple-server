"use strict";

const ValidationErrorJoi = require("joi").ValidationError;
const ValidationError = require("../errors/ValidationError");

class ErrorHandle {
  /**
   * Handler for all unhandled errors during api requests
   *
   * @param {Error} error some error
   * @param {Request} req request object
   * @param {Response} res response object
   * @param {function} next express callback
   * @returns {void} nothing
   */
  static apiErrorHandlerMiddleware(error, req, res, next) {
    let status = 500;
    switch (true) {
      case (error instanceof ValidationErrorJoi):
      case (error instanceof ValidationError):
        status = 400;
        break;
    }

    res.status(status).json({
      message: error.message
    });
  }
}

module.exports = ErrorHandle;
