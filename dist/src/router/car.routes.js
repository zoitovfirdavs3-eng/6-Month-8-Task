"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const carRouter = express.Router();
// carRouter ni import qilamiz
// const carRouter = require("./car.routes");
// carRouter.get("/", (req, res) => {
//   res.json({ message: "Get all cars" });
// });
// carRouter.get("/:id", (req, res) => {
//   res.json({ message: `Get car with id ${req.params.id}` });
// });
// carRouter.post("/", (req, res) => {
//   res.json({ message: "Create new car" });
// });
// carRouter.put("/:id", (req, res) => {
//   res.json({ message: `Update car with id ${req.params.id}` });
// });
// carRouter.delete("/:id", (req, res) => {
//   res.json({ message: `Delete car with id ${req.params.id}` });
// });
module.exports = carRouter;
