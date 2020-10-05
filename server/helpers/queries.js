import joi from 'joi';


export const queriesSchema= joi.object({
    name: joi.string()
      .min(4)
      .max(255)
      .required(),
    email:joi.string()
      .required()
      .email()
      .lowercase(),
    subject: joi.string()
      .min(12)
      .max(255)
      .required(),
    message: joi.string()
        .min(10) 
        .required() 

      
  });

  