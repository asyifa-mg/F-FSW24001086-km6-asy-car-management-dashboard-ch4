//console.log("Hello world");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const PORT = process.env.PORT || "3000";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//akhir middleware

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(router);

app.listen(PORT, () => {
  console.log(`SERVER JALAN DI PORT: ${PORT}`);
});
