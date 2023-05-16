const Rider = require("../models/rider");

exports.riderRegister = async (req, res) => {
  console.log(req.body);
  // const { errors, isValid } = validateRegistrationInput(req.body);
  try {
    // we need to include a check for both email duplication and cabId duplication as well
    let oldRideremail = await Rider.find({ email: req.body.email });
    console.log(oldRideremail);
    let errors = {};
    if (oldRideremail && oldRideremail.length != 0) {
      errors.email =
        "A Rider is already registered with the provided email id, please check again!!";
     
    } 
    if( errors.email){
      return res.status(400).json(errors);
    }
    else {
      const newRider = new Rider({
        name: req.body.name,
        phone: req.body.phone,
        email:  req.body.email,
        rating: req.body.rating,
      });
      newRider
        .save()
        .then(() => {
          console.log("Rider registered successfully");
          res.status(201).json({
            status: 201,
            message: "Rider registered successfully",
          });
        })
        .catch((err) => {
          console.log("Error in saving the Rider on the database:", err);
          res
            .status(400)
            .json("Error in saving the Rider on the database:" + err);
        });
    }
  } catch (err) {
    console.log("Getting error in accessing data from the database:", err);
    res.status(400).json("Getting error in accessing data from the database: " + err);
  }
};



exports.findRider = (req, res) => {
  console.log(req.params)
  const query = { _id: req.params.id };
  Rider.findOne(query)
    .then((rider) => {
      if (rider != null) {
        console.log("Rider found");
        return res.status(201).json({
          status: 201,
          message: "Success",
          data: rider,
        });
      } else {
        errors =
          "There is no Rider associated with the id provided to server(, i.e. "+"req.parms.id"+")";
        res.status(400).json(errors);
      }
    })
    .catch((err) => {
      let errors = {};
      errors.findOne =
        "The rider have not been registered till now. Please register first.";
      errors.findOneError = err;
      res.status(400).json(errors);
    });
};
