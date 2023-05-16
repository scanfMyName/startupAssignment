const router = require("express").Router();
const cab_controller = require("../controller/cabController");

router.route("/register").post(cab_controller.cabRegister);
router.route("/:id").get(cab_controller.findCab);
module.exports = router;