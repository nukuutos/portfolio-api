const rateLimit = require('express-rate-limit');
const { TEST } = require('../config/environments');

const isTest = process.env.NODE_ENV === TEST;

const goToNextMiddleware = (req, res, next) => next();

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 10,
});

module.exports = isTest ? goToNextMiddleware : rateLimiter;
