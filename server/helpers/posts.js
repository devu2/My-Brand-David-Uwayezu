import joi from 'joi';


export const postSchema= joi.object({
    title: joi.string()
      .min(6)
      .required(),
    body:joi.string()
      .min(10)
      .required(),
    
  });

  