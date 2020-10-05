import { Schema, model } from "mongoose";

const querySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
},
{timestamps: true}
);

export default model("Query", querySchema);
