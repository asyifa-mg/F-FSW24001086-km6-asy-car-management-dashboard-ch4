const router = require("express").Router();

const CustomerAdmin = require("../controllers/customerAdminController");

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createCustomerPage);
router.get("/admin/create", CustomerAdmin.createCustomer);
router.get("/edit/:id", CustomerAdmin.editCustomerPage);
router.get("/admin/edit/:id", CustomerAdmin.editCustomer);
router.get("/admin/delete/:id", CustomerAdmin.deleteCustomer);

module.exports = router;
