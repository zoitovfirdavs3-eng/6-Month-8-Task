const express = require("express");
const mainRouter = express.Router();

const carRouter = require("./car.routes");
const categoryRouter = require("./category.routes");

mainRouter.use("/cars", carRouter);
mainRouter.use("/categories", categoryRouter);

module.exports = mainRouter;