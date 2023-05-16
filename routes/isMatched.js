const router = require("express").Router();
const matchController = require("../controller/matchController");

router.route("/register").post( matchController.matchRegister);
module.exports = router;