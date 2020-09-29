const joi = require('joi');


const postSchema= joi.object({
    title: joi.string()
      .min(6)
      .required(),
    body:joi.string()
      .min(10)
      .required(),
    
  });

  module.exports = {postSchema}