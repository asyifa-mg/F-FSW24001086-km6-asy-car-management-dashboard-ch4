const router = require("express").Router();

const Car = require("../controllers/carController");
const img = require("../models/car");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "_" + Date.now() + file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("image");

router.get("/", Car.CarPage);
router.get("/create", Car.createCarPage);
router.post("/admin/create", Car.createCar);
router.get("/edit/:id", Car.editCarPage);
router.post("/admin/edit/:id", Car.editCar);
router.post("/admin/delete/:id", Car.deleteCar);

module.exports = router;
