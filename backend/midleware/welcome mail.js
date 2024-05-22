const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "email of we send data",
    pass: "auth pass word",
  },
});

const sendWelcomeEmail = (recipientEmail) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "email of we send data",
      to: recipientEmail,
      subject: "Welcome to Our Website!",
      text: "Hello and welcome to our website. We are glad to have you on board!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending welcome email:", error);
        reject(error);
      } else {
        console.log("Welcome email sent:", info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = { sendWelcomeEmail };
