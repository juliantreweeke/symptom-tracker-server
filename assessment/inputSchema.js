const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { FREQUENCY_TYPE } = require("./constants");
const validateSchema = require(".././utils/validateSchema");

const baseSchema = {
  description: Joi.string(),
  frequency: Joi.string()
    .valid(...Object.keys(FREQUENCY_TYPE))
    .required(),
  questions: Joi.array().required(),
  title: Joi.string(),
  clinicianId: Joi.objectId(),
  clientId: Joi.objectId(),
};

module.exports = {
  createSchema: validateSchema(baseSchema),
};
