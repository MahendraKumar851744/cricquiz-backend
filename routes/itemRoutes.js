import express from "express";
import { getItems,addItem } from "../controllers/itemsController.js";

const router = express.Router();
router.route("/items")
      .get(getItems)
      .post(addItem)

export default router;