const dataPreparation = require('../../data-preparation');
const company = require('./fields/company');
const email = require('./fields/email');
const message = require('./fields/message');
const name = require('./fields/name');

const data = {
  name: 'John Doe',
  company: "John's company",
  message: 'We want suggest to you',
  email: 'job@offer.com',
};

const fields = [name, company, email, message];

const fieldsTests = dataPreparation(fields, data);

module.exports = fieldsTests;
