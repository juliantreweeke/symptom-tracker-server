const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const { USER_TYPE } = require("./constants");

const validateSchema = require("../utils/validateSchema");

const baseSchema = {
  email: Joi.string().required(),
};

module.exports = {
  createSchema: validateSchema(baseSchema)
};

