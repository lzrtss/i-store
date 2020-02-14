import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  matchesPattern,
  isNumeric,
  hasLengthBetween
} from 'revalidate';

const isAlphabeticWithSpaces = matchesPattern(/^[A-Za-z ]+$/);

const isPositiveNumber = createValidator (
  (message) => (value) => {
    if (value <= 0) {
      return message;
    }
  },
  'Must be greater than 0'
);

export const prodFormValidation = combineValidators({
  name: composeValidators(
    isRequired,
    isAlphabeticWithSpaces({
      message: 'Must contain chars ans spaces only'
    }),
    hasLengthBetween(3, 20)({
      message: 'Must be between 3 and 20 chars'
    })
  )('Name'),
  price: composeValidators(
    isRequired,
    isNumeric,
    isPositiveNumber
  )('Price'),
  origin: isRequired('Origin')
});
