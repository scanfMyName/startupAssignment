const Cab = require("../models/cab");

exports.cabRegister = async (req, res) => {
  console.log(req.body);
  // const { errors, isValid } = validateRegistrationInput(req.body);
  try {
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    let oldCab = await Cab.find({ numbPlate: req.body.numbPlate });
    console.log(oldCab);
    if (oldCab && oldCab.length != 0) {
      let errors = {};
      errors.numbPlate =
        "A vehicle is already registered with the provided number plate, please check again!!";
      return res.status(400).json(errors);
    } else {
      const newCab = new Cab({
        modelName: req.body.modelName,
        numbPlate: req.body.numbPlate,
      });
      newCab
        .save()
        .then(() => {
          console.log("Cab registered successfully");
          res.status(201).json({
            status: 201,
            message: "Cab registered successfully",
          });
        })
        .catch((err) => {
          console.log("Error in saving the Cab on the database:", err);
          res
            .status(400)
            .json("Error in saving the Cab on the database:" + err);
        });
    }
  } catch (err) {
    console.log("Gettign error in accessing data from the database:", err);
    res.status(400).json("Error4: " + err);
  }
};

exports.findCab = (req, res) => {
  // const { errors, isValid } = validateLoginInput(req.body);
  // console.log("Login after validation");
  // if (!isValid) {
  //   console.log("Login have errors");
  //   return res.status(400).json(errors);
  // }
  console.log(req.params)
  const query = { _id: req.params.id };
  Cab.findOne(query)
    .then((cab) => {
      if (cab != null) {
        console.log("Cab found");
        return res.status(201).json({
          status: 201,
          message: "Success",
          data: cab,
        });
      } else {
        errors =
          "There is no cab associated with the id provided to server(, i.e. "+"req.parms.id"+")";
        res.status(400).json(errors);
      }
    })
    .catch((err) => {
      errors.findOne =
        "The cab have not been registered till now. Please register first.";
      errors.findOneError = err;
      res.status(400).json(errors);
    });
};
