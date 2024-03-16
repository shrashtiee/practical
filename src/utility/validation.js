import validatejs from 'validate.js';
import validation from './validationConstraints';

export function validate(fieldName, value) {
  const formValues = {};
  formValues[fieldName] = value;
  const formFields = {};
  formFields[fieldName] = validation() && validation()[fieldName];
  const result = validatejs(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }
  return null;
}
