const app = require('../../app');

const ExtendedSupertest = require('../extended-supertest');
const bodyFields = require('./body-fields/send-message');

const template = '/message';
const method = 'post';

const config = {
  template,
  method,
};

const request = new ExtendedSupertest(app, config);

describe(`${method.toUpperCase()} ${template}`, () => {
  request.testBodyFields(bodyFields);
});
