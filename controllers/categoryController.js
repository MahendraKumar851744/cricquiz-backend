import categoryModel from "../models/categoryModel.js";

// Get
export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    return res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// Add Category
export const addCategory = async (req, res) => {
  try {
    const { title } = req.body;
    categoryModel.create({
      title,
    });
    return res.status(201).json({
      status: "success",
      data: {
        title: title
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};
