const { MESSAGE_MIN_LENGTH } = require('../../../../config/errors');

const message = {
  name: 'message',
  tests: [
    {
      message: 'should fail, no field',
      data: {},
      error: MESSAGE_MIN_LENGTH,
    },
    {
      message: 'should fail, empty field',
      data: { message: '' },
      error: MESSAGE_MIN_LENGTH,
    },
    {
      message: 'should fail, min length',
      data: { message: 'Mess' },
      error: MESSAGE_MIN_LENGTH,
    },
  ],
};

module.exports = message;
