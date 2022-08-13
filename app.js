const express = require('express');

const app = express();

const sendMessage = require('./controllers/send-message');

const errorHandler = require('./middlewares/error-handler');
const rateLimiter = require('./middlewares/rate-limiter');
const validator = require('./middlewares/validator');
const validate = require('./middlewares/validate');

app.use(express.json());
app.use(rateLimiter);

app.use('/message', validator, validate, sendMessage);

app.use(errorHandler);

module.exports = app;
