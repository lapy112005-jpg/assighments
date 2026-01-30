import { model, Schema } from "mongoose";
export const users = [];

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    maxLength: 60,
    minLength: 18,
  },
});

export const userModel = model("user", userSchema);
