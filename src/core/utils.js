import { Config } from '../config';

const validateRequiredFields = (requiredFields, values) => {
  let errors = {};
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Field "${field}" is required`;
    }
  });

  return errors;
};

const isMobilePhone = formattedNumber =>
  return validator.isMobilePhone(formattedNumber, Config.COUNTRY)

const isEamil = email => email && validator.isEmail(email)

const isPostCode = postCode =>
  postCode && validator.isPostalCode(postCode, Config.COUNTRY)

export {
  validateRequiredFields,
  isMobilePhone,
  isEamil,
  isPostCode
}
