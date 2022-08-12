module.exports = (error, req, res, next) => {
  if (res.headersSent) return next(error);

  const { message, statusCode } = error;

  console.log(message);

  return res.status(statusCode || 500).json({
    message: message || 'Server error occured. Please try again.',
  });
};
