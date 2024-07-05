import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  question: { type: String, required: true },   
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  correct_ans: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
});

export default mongoose.model("items", itemSchema);
