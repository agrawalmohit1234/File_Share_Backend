require("dotenv").config();
const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html }) => {
  //   let transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "agrawalmohit.tech@gmail.com", // generated ethereal user
  //       pass: "HLn9YOswp2Wx85C4", // generated ethereal password
  //     },
  //   });

  //   // send mail with defined transport object
  //   let info = await transporter.sendMail({
  //     from: `inShare <${from}>`, // sender address
  //     to: to, // list of receivers
  //     subject: subject, // Subject line
  //     text: text, // plain text body
  //     html: html, // html body
  //   });
  // };

  // var nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: from,
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  };

  let info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  // module.exports = sendMail;
};
