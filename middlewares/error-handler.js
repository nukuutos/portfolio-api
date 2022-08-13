const { TEST } = require('../config/environments');

const { NODE_ENV } = process.env;

module.exports = (error, req, res, next) => {
  if (res.headersSent) return next(error);

  const { message, statusCode } = error;

  if (NODE_ENV !== TEST) {
    console.log(message);
  }

  return res.status(statusCode || 500).json({
    message: message || 'Server error occured. Please try again.',
  });
};
