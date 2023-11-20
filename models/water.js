import { Schema, model } from "mongoose";
import Joi from "joi";

const waterSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  amount: {
    type: Number,
    min: 1,
    max: 5000,
    required: [true, "Enter the value of the water used"],
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Enter the time of entering"],
  },
});

export const waterAddSchema = Joi.object({
  amount: Joi.string().required().messages({
    "any.required": `"amount" must be exist`,
  }),
  date: Joi.string().required(),
});

const Water = model("water", waterSchema);

export default Water;
