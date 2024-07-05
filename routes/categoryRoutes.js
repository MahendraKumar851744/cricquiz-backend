import express from "express";
import {
  getAllCategories,
  addCategory,
} from "../controllers/categoryController.js";

const router = express.Router();
router.route("/categories").get(getAllCategories).post(addCategory);

export default router;
