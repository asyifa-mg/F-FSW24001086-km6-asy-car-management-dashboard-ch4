const router = require("express").Router();

const Car = require("./carRouter");

router.use("/cars", Car);

module.exports = router;
