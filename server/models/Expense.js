const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Expense title is required"],
      trim: true,
      minlength: [2, "Title must contain at least 2 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    amount: {
      type: Number,
      required: [true, "Expense amount is required"],
      min: [0.01, "Amount must be greater than zero"],
    },

    category: {
      type: String,
      required: [true, "Expense category is required"],
      trim: true,
    },

    date: {
      type: Date,
      required: [true, "Expense date is required"],
      default: Date.now,
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "UPI", "Bank Transfer", "Other"],
      default: "Cash",
    },

    notes: {
      type: String,
      trim: true,
      maxlength: [500, "Notes cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;