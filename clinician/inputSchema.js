const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const validateSchema = require(".././utils/validateSchema");

const baseSchema = {
  businessName: Joi.string(),
  clients: Joi.array(),
  imageURL: Joi.string(),
  user: Joi.objectId().required(),
};

module.exports = {
  createSchema: validateSchema(baseSchema)
};
