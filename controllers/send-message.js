const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);

module.exports = (req, res) => {
  const { email, message, company } = req.body;

  const msg = {
    to: 'dev.nukuutos@gmail.com',
    from: email,
    subject: company,
    text: message,
  };

  sgMail.send(msg);

  res.end();
};
