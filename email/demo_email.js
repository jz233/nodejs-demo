var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'douj27@gmail.com',
//     password: 'Jj^(&&935'
//   }
// });
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: 'douj27@qq.com',
    password: 'miqjscwpzcqbbaad'
  }
});

var mailOptions = {
  from: 'douj27@qq.com',
  to: 'douj27@outlook.com',
  subject: 'node mail',
  text: 'Hi DouJ'
};

transporter.sendMail(mailOptions, function(err, info) {
  if(err) {
    console.log(err);
  }else {
    console.log('Email sent: ' + info.response);
  }
});
