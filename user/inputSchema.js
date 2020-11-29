const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const { GENDER, ROLE } = require("./constants");

const validateSchema = require("../utils/validateSchema");

const authSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

const userSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string().valid(...Object.keys(ROLE)).required(),
}

const registerSchema = {
  
};

const createClinicianSchema = {
  ...authSchema,
  ...userSchema
}

const createClientSchema = {
  clinician: Joi.objectId().required(),
  DOB: Joi.date().required(),
  email: Joi.string().email().required(),
  notes: Joi.string(),
  mobile: Joi.string().length(10).pattern(/^[0-9]+$/),
  gender: Joi.string()
  .valid(...Object.keys(GENDER))
  .required(),
  ...userSchema
}


module.exports = {
  createClientSchema: validateSchema(createClientSchema),
  createClinicianSchema: validateSchema(createClinicianSchema),
  loginSchema: validateSchema(authSchema),
  
};

