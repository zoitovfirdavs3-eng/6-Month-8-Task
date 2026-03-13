const { Router } = require("express");
const categoryController = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter.post("/create", categoryController.CREATE_CATEGORY);
categoryRouter.get("/all", categoryController.GET_CATEGORIES);
categoryRouter.get("/:id/cars", categoryController.GET_CATEGORY_CARS);

categoryRouter
  .route("/:id")
  .get(categoryController.GET_CATEGORY)
  .put(categoryController.UPDATE_CATEGORY)
  .delete(categoryController.REMOVE_CATEGORY);

module.exports = categoryRouter;
