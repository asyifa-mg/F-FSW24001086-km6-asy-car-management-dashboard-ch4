const router = require("express").Router();

const Customer = require("./customerRouter");
const CustomerAdmin = require("./customerAdminRouter");

router.use("/api/v1/customers", Customer);

//dashboard admin
router.use("/customers", CustomerAdmin);

module.exports = router;
