"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.json({ message: "Get all cars" });
});
router.get("/:id", (req, res) => {
    res.json({ message: `Get car with id ${req.params.id}` });
});
router.post("/", (req, res) => {
    res.json({ message: "Create new car" });
});
router.put("/:id", (req, res) => {
    res.json({ message: `Update car with id ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res.json({ message: `Delete car with id ${req.params.id}` });
});
module.exports = router;
