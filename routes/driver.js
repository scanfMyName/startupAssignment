const router = require("express").Router();
const driver_controller = require("../controller/driverController");

router.route("/register").post( driver_controller.driverRegister);
router.route("/:id").get(driver_controller.findDriver);
module.exports = router;