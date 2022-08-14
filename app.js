const express = require('express');

const app = express();

const sendMessage = require('./controllers/send-message');

const errorHandler = require('./middlewares/error-handler');
const rateLimiter = require('./middlewares/rate-limiter');
const validator = require('./middlewares/validator');
const validate = require('./middlewares/validate');
const cors = require('./middlewares/cors');

app.use(cors);
app.use(rateLimiter);
app.use(express.json());

app.post('/message', validator, validate, sendMessage);

app.use(errorHandler);

module.exports = app;
