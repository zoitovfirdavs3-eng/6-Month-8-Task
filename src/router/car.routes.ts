const { Router } = require("express");
const carController = require("../controllers/car.controller");

const carRouter = Router();

carRouter.post("/create", carController.CREATE_CAR);
carRouter.get("/all", carController.GET_CARS);
carRouter
  .route("/:id")
  .get(carController.GET_CAR)
  .put(carController.UPDATE_CAR)
  .delete(carController.REMOVE_CAR);

module.exports = carRouter;
