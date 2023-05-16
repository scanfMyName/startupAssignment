// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// const validateRegistrationInput = require("../validation/register");
// const validateLoginInput = require("../validation/login");
// const bcrypt = require("bcrypt");
// const sendEmail = require("../controller/sendEmail");




// exports.userLogin = (req, res) => {
//   const { errors, isValid } = validateLoginInput(req.body);
//   console.log("Login after validation");
//   if (!isValid) {
//     console.log("Login have errors");
//     return res.status(400).json(errors);
//   }
//   const query = { email: req.body.email };
//   User.findOne(query)
//     .then((user) => {
//       if (user != null) {
        
//         // if(!user.useremailverified){
//         //   errors.email = "Please verify your email first";
//         //   return res.status(400).json(errors);
//         // }
//         console.log("User found");

//         const username = user.username;
//         bcrypt
//           .compare(req.body.password, user.password)
//           .then((result) => {
//             console.log(result);  
//             if (result) {
                 
//                 const payLoad = {
//                     emailId: user.email,
//                   };
//               const options = { expiresIn: 2147483647 };
//               jwt.sign(payLoad, process.env.JWT_SECRET_KEY, options, (err, token) => {
//                 if (err) res.json("login failed !" + err);
//                 else {
//                   return res.status(201).json({
//                     status: 201,
//                     message: "Success",
//                     jwt_token: token,
//                   });
//                 }
//               });
//               console.log("Login successful");  
//             } else {
//                 errors.passwordsignin = "Incorrect email or password entered";
//               return res.status(400).json(errors);
//             }
//           })
//           .catch((err) => {
//             errors.passwordCompare = "Error in comparing passwords";
//             errors.passwordCompareError = err;
//             res.status(400).json(errors + " " + err);
//           });
//       } else {
//         errors.emailVerification =
//           "You have not been registered till now. Please register first.";
//         res.status(400).json(errors);
//       }
//     })
//     .catch((err) => {
//       errors.findOne = "You have not been registered till now. Please register first.";
//       errors.findOneError = err;
//       res.status(400).json(errors);
//     });
// };

// exports.userRegister = async (req, res) => {
//   console.log(req.body);
//   const { errors, isValid } = validateRegistrationInput(req.body);   
//   try {
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//     let user = await User.find({ email: req.body.email });
//     console.log(user);
//     if(user && user.length!=0 && !user.useremailverified){
//       errors.email = "Email already exists but it haven't been verified yet, check the spam or inbox for the verification email";
//       return res.status(400).json(errors);
//     }
//     else if (user && user.length!=0 ) {
//       errors.email = "This email is already linked with an account.";
//       return res.status(400).json(errors);
//     } 
    
//     else {
//       const newUser = new User({
//         first_name: req.body.first_name,
//         email: req.body.email,
//         last_name: req.body.last_name,
//         city: req.body.city,
//         age: req.body.age,
//       });

      
//       const payLoad = {
//         emailId: newUser.email,
//       };
//       const options = { expiresIn: 2147483647 };
//       const emailToken = jwt.sign(
//         payLoad,
//         process.env.JWT_SECRET_KEY,
//         options,
//         (err, token) => {
//           if (err) res.json("login failed !" + err);
//           else {
//             console.log(token);
//             const url = `http://localhost:5000/verify/${emailToken}`;
//       const saltRounds = 10;
//             bcrypt
//         .hash(req.body.password, saltRounds)
//         .then((hash) => {
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(() => {
//               console.log(emailToken)
//               // sendEmail(
//               //   newUser.email,
//               //   "Registration Successful in Noapp",
//               //   `Greetings from Zekademy! You have successfully registered in Noapp. Please click on the link below to verify your email address. ${url}`,
//               // ) 
//               //   .then(() => {  
//               //     console.log("Email sent");
//               //     res.status(201).json({
//               //       status: 201,
//               //       message: "Success",
//               //       jwt_token: emailToken,
//               //     });
                  
//               //   })
//               //   .catch((err) => {
//               //     console.log("Error in the email sending", err);
//               //     res.status(400).json("Error1: " + err);
//               //   });
//               res.status(201).json({
//                       status: 201,
//                       message: "Success",
//                       jwt_token: token,
//                     });
//             })
//             .catch((err) => {
//               console.log("Error after the user saving", err);
              
//               res.status(400).json("Error2: " + err)});
//         })
//         .catch((err) => res.status(400).json("Error3: " + err));



//             return token;
//           }
//         }
//       );
      
      
//     }
//   } catch (err) {
//     res.status(400).json("Error4: " + err);
//   }
// };


