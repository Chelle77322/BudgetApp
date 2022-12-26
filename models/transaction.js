import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter transaction description"
    },
    value: {
      type: Number,
      required: "Enter transaction amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
