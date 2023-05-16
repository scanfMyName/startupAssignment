const Match = require("../models/matched");
const Driver = require("../models/driver");
const Rider = require("../models/rider");
const Cab = require("../models/cab");

exports.matchRegister = async (req, res) => {
  console.log(req.body);
  // const { errors, isValid } = validateRegistrationInput(req.body);
  try {
    // we need to include a check for both email duplication and cabId duplication as well
    // lets find the rating of the rider 
    let rider =  await Rider.find({_id: req.body.riderId});
    if(rider && rider.length == 0){
      return res.status(400).json("No rider exist with the given id");
    }
    console.log(rider[0].rating)
    let drivers = await Driver.find({ isMatched: false, rating: { $gt: rider[0].rating } });
    if(drivers && drivers.length == 0){
      return res.status(400).json("No driver available at the present time ");
    }
    // lets pickup the first driver
    let driver = drivers[0];
    const query = { _id: driver.cabId };
    Cab.findOne(query)
        .then((cab) => {
            if (cab != null) {
              console.log("Cab found");
              Driver.updateOne({_id: driver._id}, {isMatched: true})
              .then(() => {
                console.log("Driver updated successfully");
                const newMatch =  new Match({
                driverId: driver._id,
                riderId: req.body.riderId
                });
                newMatch
                  .save()
                  .then(() => {
                    console.log("Match registered successfully.");
                    return res.status(201).json({
                      status: 201,
                      message: "Success",
                      data: {
                        cab: cab,
                        driver: driver
                      }
                    });
                  })
                  .catch((err) => {
                    console.log("Error in saving the Matching on the database:", err);
                    res
                      .status(400)
                      .json("Error in saving the Matching on the database:" + err);
                  });
                })
                .catch((err) => {
                  console.log("Error in updating the Rider available currently, on the database:", err);
                  res 
                    .status(400)
                    .json("Error in updating the Rider available currently, on the database:" + err);
                });
              }
              else {
                    console.log("There is no cab present which is registered against the driver:");
                    return res.status(400).json({
                      status: 400,
                      message: "There is no cab present which is registered against the driver.",
                    });
                  }
                })
        .catch((err) => {
          console.log("There is no cab registered as what written in the driver's database:", err);
          res
            .status(400)
            .json("There is no cab registered as what written in the driver's database:" + err);
        });
    
  } catch (err) {
    console.log("Getting error in accessing data from the database regarding rider or currently free available drivers:", err);
    res.status(400).json("Getting error in accessing data from the database regarding rider or currently free available drivers:" + err);
  }
};

