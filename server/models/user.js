import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true
      
    },
    Country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
