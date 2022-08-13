const { EMAIL_REQUIRED, INVALID_EMAIL } = require('../../../../config/errors');

const email = {
  name: 'email',
  tests: [
    {
      message: 'should fail, no field',
      data: {},
      error: EMAIL_REQUIRED,
    },
    {
      message: 'should fail, empty field',
      data: { email: '' },
      error: EMAIL_REQUIRED,
    },
    {
      message: 'should fail, invalid email',
      data: { email: 'email' },
      error: INVALID_EMAIL,
    },
    {
      message: 'should fail, invalid email',
      data: { email: 'email@' },
      error: INVALID_EMAIL,
    },
    {
      message: 'should fail, invalid email',
      data: { email: 'email.com' },
      error: INVALID_EMAIL,
    },
    {
      message: 'should fail, invalid email',
      data: { email: 'email@.com' },
      error: INVALID_EMAIL,
    },
  ],
};

module.exports = email;
