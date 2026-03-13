"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mainRouter = express.Router();
// carRouter ni import qilamiz
const carRouter = require("./car.routes");
mainRouter.use("/cars", carRouter);
module.exports = mainRouter;
