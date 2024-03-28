const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    console.log(customers);
    res.render("customers/index.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCustomerPage = async (req, res) => {
  try {
    res.render("customers/create.ejs", {
      customers,
    });
  } catch (err) {
    res.render("customers/create.ejs", {
      message: err.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.redirect("/Customers");
  } catch (err) {
    console.log(err.message);
  }
};

const editCustomerPage = async (req, res) => {
  try {
    const customer = await Customer.findByAll;
    res.render("customers/edit.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const editCustomer = async (req, res) => {
  try {
    await Customer.findByAllAndUpdate;
    res.render("customers/edit.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const editCustomer = async (req, res) => {
  try {
    await Customer.findByAllAndUpdate;
    res.render("customers/edit.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  editCustomer,
  deleteCustomer
};
