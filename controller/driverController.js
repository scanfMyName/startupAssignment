const Driver = require("../models/driver");

exports.driverRegister = async (req, res) => {
  console.log(req.body);
  // const { errors, isValid } = validateRegistrationInput(req.body);
  try {
    // we need to include a check for both email duplication and cabId duplication as well
    let oldDriveremail = await Driver.find({ email: req.body.email });
    let odlDriverCabId = await Driver.find({ cabId: req.body.cabId });
    console.log(oldDriveremail, odlDriverCabId);
    let errors = {};
    if (oldDriveremail && oldDriveremail.length != 0) {
      errors.email =
        "A vehicle is already registered with the provided number plate, please check again!!";
     
    } 
    if(odlDriverCabId && odlDriverCabId.length != 0){
      errors.cabId = "A driver is already registered with the provided cabId, please check again!!";
    }
    if(errors.cabId || errors.email){
      return res.status(400).json(errors);
    }
    else {
      const newDriver = new Driver({
        name: req.body.name,
        phone: req.body.phone,
        email:  req.body.email,
        rating: req.body.rating,
        cabId: req.body.cabId,
      });
      newDriver
        .save()
        .then(() => {
          console.log("Driver Registered successfully registered successfully");
          res.status(201).json({
            status: 201,
            message: "Driver Registered successfully registered successfully",
          });
        })
        .catch((err) => {
          console.log("Error in saving the Driver on the database:", err);
          res
            .status(400)
            .json("Error in saving the Driver on the database:" + err);
        });
    }
  } catch (err) {
    console.log("Getting error in accessing data from the database:", err);
    res.status(400).json("Getting error in accessing data from the database: " + err);
  }
};



exports.findDriver = (req, res) => {
  console.log(req.params)
  const query = { _id: req.params.id };
  Driver.findOne(query)
    .then((driver) => {
      if (driver != null) {
        console.log("Driver found");
        return res.status(201).json({
          status: 201,
          message: "Success",
          data: driver,
        });
      } else {
        errors =
          "There is no Driveer associated with the id provided to server(, i.e. "+"req.parms.id"+")";
        res.status(400).json(errors);
      }
    })
    .catch((err) => {
      errors.findOne =
        "The driver have not been registered till now. Please register first.";
      errors.findOneError = err;
      res.status(400).json(errors);
    });
};
