import validator  from "validator";
import { Config } from '../config';

export const validateRequiredFields = (requiredFields, values) => {
  let errors = {};
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Field "${field}" is required`;
    }
  });

  return errors;
};

export const isMobilePhone = formattedNumber =>
  validator.isMobilePhone(formattedNumber, Config.COUNTRY)

export const isEmail = email => email && validator.isEmail(email)

export const isPostCode = postCode =>
  postCode && validator.isPostalCode(postCode, Config.COUNTRY.substring(3))
