// Send Email to user

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'email@example.com',
    pass: 'password'
  }
});

const sendVerificationEmail = async (user, token) => {
  const mailOptions = {
    from: 'sajjadakhtar975@gmail.com',
    to: user.email,
    subject: 'Verify Your Account',
    html: `
      <p>Hello ${user.name},</p>
      <p>Please verify your account by clicking the following link:</p>
      <p><a href="http://example.com/verify/${token}">Verify Account</a></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent to', user.email);
  } catch (error) {
    console.error(error);
  }
};
