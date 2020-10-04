const joi = require('joi');


const authSchema= joi.object({
    name: joi.string()
      .min(6)
      .required(),
    email:joi.string()
      .min(10)
      .required()
      .email()
      .lowercase(),
    password: joi.string()
      .min(8)
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    country: joi.string()
        .max(30)
        .required(),
        

    city: joi.string()
        .max(30)
        
        .required()     
  });

  module.exports = {authSchema}
  