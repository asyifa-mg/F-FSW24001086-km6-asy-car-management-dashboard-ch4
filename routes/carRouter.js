const router = require("express").Router();

const Car = require("../controllers/carController");

router.get("/", Car.CarPage);
router.get("/create", Car.createCarPage);
router.post("/admin/create", Car.createCar);
router.get("/edit/:id", Car.editCarPage);
router.post("/admin/edit/:id", Car.editCar);
router.post("/admin/delete/:id", Car.deleteCar);

module.exports = router;
