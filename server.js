import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js"
import catRoutes from "./routes/categoryRoutes.js"
// Dot ENV config
dotenv.config();
// mongodb connection
connectDB();
// REST object
const app = express();
//middlewares
app.use(express.json());
// app.use(cors());
//routes
app.use("/api/v1/", catRoutes);
app.use("/api/v1/", itemRoutes);
// port
const PORT = process.env.PORT || 8080;
// listen
app.listen(PORT, () => {
  console.log("Server started Successfully!".bgCyan.white);
});
