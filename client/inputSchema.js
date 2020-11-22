const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const { GENDER } = require("./constants");

const validateSchema = require(".././utils/validateSchema");

const baseSchema = {
  clinician: Joi.objectId().required(),
  DOB: Joi.date().required(),
  notes: Joi.string(),
  mobile: Joi.string().length(10).pattern(/^[0-9]+$/),
  gender: Joi.string()
  .valid(...Object.keys(GENDER))
  .required(),
  user: Joi.objectId().required(),
};

module.exports = {
  createSchema: validateSchema(baseSchema)
};

