const router = require("express").Router();
const rider_controller = require("../controller/riderController");

router.route("/register").post( rider_controller.riderRegister);
router.route("/:id").get(rider_controller.findRider);
module.exports = router;
