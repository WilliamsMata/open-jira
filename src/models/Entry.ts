import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "@/interfaces";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} is not an allowed state",
    },
    default: "pending",
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
