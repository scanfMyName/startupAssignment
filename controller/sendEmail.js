// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text, track = false) => {
//   const hostid = process.env.USER;
//   const hostpass = process.env.PASS;
//   console.log("sendEmail function called");
//   console.log("to: " + to);
//   console.log("subject: " + subject);
//   console.log("text: " + text);
//   console.log("hostid: " + hostid);
//   console.log("hostpass: " + hostpass);

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     port: 587,
//     secure: false,
//     auth: {
//       user: hostid,
//       pass: hostpass, // not forgot to change it since you are using it in public
//     },
//     tls:{
//       rejectUnauthorized:false
//   },
//   });
//   const mailOptions = {
//     from: hostid,
//     to: to,
//     subject: subject,
//     text: text,
//   };

//   try {
//     let info = await transporter.sendMail(mailOptions, (err, data) => {
//       if (err) {
//         console.log("Error Occurs:", err);
//         return err;
//       } else {
//         console.log("Email sent!!! ", data);
//         return data;
//       }
//     });
//     // console.log("info/err: " + info);
//     // if (Array.isArray(info.rejected) && info.rejected.length) {
//     //   console.log("Error 0:" + err);
//     //   return false;  C:\Users\mayank garg\Desktop\Wweb Assignments\Zekademy\middleware\sendEmail.js
//     // }
//   } catch (err) {
//     console.log("Error 0:" + err);
//     return false;
//   }
//   return true;
// };

// module.exports = sendEmail;
