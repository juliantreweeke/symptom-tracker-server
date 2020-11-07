const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const { SEX } = require("./constants");

const validateSchema = require(".././utils/validateSchema");

const baseSchema = {
  clinician: Joi.objectId().required(),
  DOB: Joi.date().required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  notes: Joi.string(),
  sex: Joi.string()
  .valid(...Object.keys(SEX))
  .required(),
};

module.exports = {
  createSchema: validateSchema(baseSchema)
};

