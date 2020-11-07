const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const validateSchema = require(".././utils/validateSchema");

const baseSchema = {
  client: Joi.objectId(),
  businessName: Joi.string(),
  email: Joi.string(),
  clients: Joi.array(),
  imageURL: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  accounts: Joi.array(),
};

module.exports = {
  createSchema: validateSchema(baseSchema)
};
