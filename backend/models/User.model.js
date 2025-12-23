import mongoose from "mongoose";

const joinTrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
}, { timestamps: true });

const User=mongoose.model("User",joinTrainingSchema);
export default User;

