"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mainRouter = express.Router();
const carRouter = require("./car.routes");
mainRouter.use("/cars", carRouter);
exports.default = mainRouter;
