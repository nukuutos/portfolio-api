const { NAME_LENGTH, LATIN_CYRILLIC_SYMBOLS } = require('../../../../config/errors');

const name = {
  name: 'name',
  tests: [
    {
      message: 'should fail, no field',
      data: {},
      error: NAME_LENGTH,
    },
    {
      message: 'should fail, empty field',
      data: { name: '' },
      error: NAME_LENGTH,
    },
    {
      message: 'should fail, min length',
      data: { name: 'И' },
      error: NAME_LENGTH,
    },
    {
      message: 'should fail, max length',
      data: { name: 'Name name Имя имя Name name Имя имя Name n' },
      error: NAME_LENGTH,
    },
    {
      message: 'should fail, with special characters',
      data: { name: 'Тес*т' },
      error: LATIN_CYRILLIC_SYMBOLS,
    },
  ],
};

module.exports = name;
