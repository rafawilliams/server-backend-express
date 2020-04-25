const express = require("express");

const app = express();
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.js");

//settings
app.use(morgan("dev"));


//middleware
app.use(cors());

//routes
app.use(router);

module.exports = app;