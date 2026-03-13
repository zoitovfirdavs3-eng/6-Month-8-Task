const { globalError, ClientError } = require("shokhijakhon-error-handler");
const { CategoryModel, CarModel } = require("../models");

module.exports = {
  async CREATE_CATEGORY(req: any, res: any) {
    try {
      let newCategory = req.body;
      let insertCategory = await CategoryModel.create(newCategory);
      return res.status(201).json({
        message: "Category successfully created",
        status: 201,
        id: insertCategory.id,
      });
    } catch (err) {
      return globalError(err, res);
    }
  },
  async GET_CATEGORIES(req: any, res: any) {
    try {
      let categories = await CategoryModel.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: CarModel,
          attributes: ["carname"],
        },
      });
      return res.json(categories);
    } catch (err) {
      return globalError(err, res);
    }
  },
  async GET_CATEGORY(req: any, res: any) {
    try {
      let { id } = req.params;
      let findCategory = await CategoryModel.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: CarModel,
          attributes: ["carname"],
        },
      });
      if (!findCategory) throw new ClientError("Category not found", 404);
      return res.json(findCategory);
    } catch (err) {
      return globalError(err, res);
    }
  },
  async GET_CATEGORY_CARS(req: any, res: any) {
    try {
      const { id } = req.params;
      let findCategory = await CategoryModel.findByPk(id);
      if (!findCategory) throw new ClientError("Category not found", 404);
      let cars = await CarModel.findAll({
        where: { car_category: findCategory.id },
      });
      return res.json(cars);
    } catch (err) {
      return globalError(err, res);
    }
  },
  async REMOVE_CATEGORY(req: any, res: any) {
    try {
      let { id } = req.params;
      let findCategory = await CategoryModel.findByPk(id);
      if (!findCategory) throw new ClientError("Category not found", 404);
      await CarModel.destroy({ where: { car_category: id } });
      await findCategory.destroy();
      return res.json({
        message: "Category successfully deleted",
        status: 200,
      });
    } catch (err) {
      return globalError(err, res);
    }
  },
  async UPDATE_CATEGORY(req: any, res: any) {
    try {
      let updateData = req.body;
      let { id } = req.params;
      let findCategory = await CategoryModel.findByPk(id);
      if (!findCategory) throw new ClientError("Category not found", 404);
      await findCategory.update(updateData);
      return res.json({
        message: "Category successfully updated",
        status: 200,
      });
    } catch (err) {
      return globalError(err, res);
    }
  },
};
