const express = require('express');
const cors =  require('cors');
const dotenv = require('dotenv');

const isMatched = require('./routes/isMatched')
const driver = require('./routes/driver')
const cab = require('./routes/cab')
const rider = require('./routes/rider')

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
require("./config/database").connect();
// app.use(fileUpload());

const PORT = process.env.PORT || 5000;

app.use('/api/cab', cab); 
app.use('/api/rider', rider);
app.use('/api/driver', driver);
app.use('/api/isMatched', isMatched);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);

// Upload Endpoint
// app.post('/upload', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }

//   const file = req.files.file;
//   console.log(file);
//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

// app.listen(5000, () => console.log('Server Started...'));











// modules to install
// csvtojson
// dotenv
// nodemailer
// "bcrypt": "^5.1.0",
// "bcryptjs": "^2.4.3",
// "body-parser": "^1.20.1",
// "cors": "^2.8.5",
// "crypto": "^1.0.1",
// "csvtojson": "^2.0.10",
// "dotenv": "^16.0.3",
// "express": "^4.18.2",
// "jsonwebtoken": "^8.5.1",
// "mongoose": "^6.7.3",
// "multer": "^1.4.5-lts.1",
// "nodemailer": "^6.8.0",
// "nodemailer-express-handlebars": "^5.0.0",
// "nodemon": "^2.0.20",
// "validator": "^13.7.0"