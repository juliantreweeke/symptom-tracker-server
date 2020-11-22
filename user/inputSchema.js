const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const { USER_TYPE } = require("./constants");

const validateSchema = require("../utils/validateSchema");

const baseSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

const registerSchema = {
  ...baseSchema,
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userType: Joi.string()
  .valid(...Object.keys(USER_TYPE)),
};

module.exports = {
  loginSchema: validateSchema(baseSchema),
  registerSchema: validateSchema(registerSchema)
};

