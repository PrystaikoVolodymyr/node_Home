const Joi = require('joi');
const { constant, regexpEnum } = require('../../constants');

const girlSubScheme = Joi.object({
  name: Joi.string().alphanum().required(),
  age: Joi.number().min(16).required()
});

module.exports = Joi.object({
  name: Joi
    .string()
    .alphanum()
    .min(2)
    .max(50)
    .required(),
  yearOfBorn: Joi
    .number()
    .max(constant.CURRENT_YEAR)
    .required(),
  email: Joi
    .string()
    .regex(regexpEnum.EMAIL_REGEXP)
    .required(),
  password: Joi
    .string()
    .regex(regexpEnum.PASSWORD_REGEXP)
    .required(),
  job: Joi
    .boolean()
    .optional(),
  girl: girlSubScheme,
  language: Joi
    .string()
    .alphanum()
    .default('en')
});
