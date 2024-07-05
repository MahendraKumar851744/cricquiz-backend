import itemModel from "../models/itemModel.js";
import categoryModel from "../models/categoryModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const getItems = async (req, res) => {
  try {
    const categoryId = req.query.categoryId;
    var _id = new ObjectId(categoryId);
    const items = await itemModel.find({ category: _id });
    return res.status(200).json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};

export const addItem = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.body.category);
    if (!category) {
      return res.status(404).json({
        status: "Failed",
        message: "Category not found",
      });
    }

    // Create new item
    const newItem = await itemModel.create(req.body);

    return res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
