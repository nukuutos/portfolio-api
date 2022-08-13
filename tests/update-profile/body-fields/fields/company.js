const { COMPANY_LENGTH } = require('../../../../config/errors');

const company = {
  name: 'company',
  tests: [
    {
      message: 'should fail, no field',
      data: {},
      error: COMPANY_LENGTH,
    },
    {
      message: 'should fail, empty field',
      data: { company: '' },
      error: COMPANY_LENGTH,
    },
    {
      message: 'should fail, min length',
      data: { company: 'И' },
      error: COMPANY_LENGTH,
    },
    {
      message: 'should fail, max length',
      data: { company: 'Name name Имя имя Name name Имя имя Name n' },
      error: COMPANY_LENGTH,
    },
  ],
};

module.exports = company;
