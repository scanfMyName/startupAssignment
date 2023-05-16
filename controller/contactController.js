// const Contact = require("../models/contacts");

// const csvParser = require("csv-parser");
// const fs = require("fs");

// exports.serviceWorker = async (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const file = req.files.file;
//   file.mv(`./client/public/uploads/${file.name}`, async (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
//     const result = [];

//     fs.createReadStream(`./client/public/uploads/${file.name}`)
//       .pipe(csvParser())
//       .on("data", (data) => {
//         result.push(data);
//       })
//       .on("end", async () => {
//         const contacts = result.map((d) => {
//           return new Contact({
//             name: String(d['name']),
//             phone: String(d['phone']),
//             email: String(d['email']),
//             linkedIn: String(d['linkedIn']),
//           });
//         });
//         // Insert contacts
//         await Contact.insertMany(contacts)
//           .then(() => {
//             console.log("Successfully uploaded");
//             res.json({
//               msg: "Contacts exported successfully",
//               fileName: file.name,
//               filePath: `./client/public/uploads/${file.name}`,
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//             res.status(405).send("Database Error:"+err);
            
//           });
//       });
//   });
// };