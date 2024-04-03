const { Car } = require("../models");

const CarPage = async (req, res) => {
  try {
    const cars = await Car.findAll();
    console.log(cars);
    res.render("cars/index.ejs", {
      cars,
      //successMessage: req.flash("successMessage"),
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCarPage = async (req, res) => {
  try {
    res.render("cars/create.ejs");
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    await Car.create(req.body);
    //req.flash("successMessage", "Mobil berhasil ditambahkan.");
    res.redirect("/cars");
  } catch (err) {
    console.log(err.message);
  }
};

const editCarPage = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    res.render("cars/edit.ejs", {
      car,
      //successMessage: req.flash("successMessage"),
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const editCar = async (req, res) => {
  try {
    await Car.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    //req.flash("successMessage", "Mobil berhasil diedit.");
    res.redirect("/cars");
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const deleteCar = async (req, res) => {
  try {
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    //req.flash("successMessage", "Mobil berhasil dihapus.");
    res.redirect("/cars");
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

module.exports = {
  CarPage,
  createCarPage,
  createCar,
  editCarPage,
  editCar,
  deleteCar,
};
