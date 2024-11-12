

const express = require("express");

const route = express.Router();

const indexCtl = require("../controllers/indedxClt")

route.get("/",indexCtl.dashboard)

module.exports = route

