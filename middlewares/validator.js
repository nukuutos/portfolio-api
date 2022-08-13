const { body } = require('express-validator');

const {
  NAME_LENGTH,
  COMPANY_LENGTH,
  LATIN_CYRILLIC_SYMBOLS,
  MESSAGE_MIN_LENGTH,
  EMAIL_REQUIRED,
  INVALID_EMAIL,
} = require('../config/errors');

const name = body('name')
  .trim()
  .exists({ checkFalsy: true })
  .withMessage(NAME_LENGTH)
  .isLength({ min: 2, max: 40 })
  .withMessage(NAME_LENGTH)
  .matches(/^[a-z а-яё]+$/i)
  .withMessage(LATIN_CYRILLIC_SYMBOLS);

const company = body('company')
  .trim()
  .exists({ checkFalsy: true })
  .withMessage(NAME_LENGTH)
  .isLength({ min: 2, max: 40 })
  .withMessage(COMPANY_LENGTH);

const message = body('message')
  .trim()
  .exists({ checkFalsy: true })
  .withMessage(MESSAGE_MIN_LENGTH)
  .isLength({ min: 5 })
  .withMessage(MESSAGE_MIN_LENGTH);

const email = body('email')
  .trim()
  .exists({ checkFalsy: true })
  .withMessage(EMAIL_REQUIRED)
  .normalizeEmail()
  .isEmail()
  .withMessage(INVALID_EMAIL);

module.exports = [name, company, message, email];
