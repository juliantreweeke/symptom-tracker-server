const Joi = require('joi');

const validateSchema = (schemaRules) => { 
  return (req, res, next) => { 

  const schema = Joi.object(schemaRules)
  
  const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
  };

  const { error } = schema.validate(req.body, options);
  if (!error) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
    res.status(422).json({ error: message }) } 
  } 
} 

module.exports = validateSchema;
