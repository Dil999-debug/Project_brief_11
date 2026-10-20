
const Expense = require("../models/Expense");

// GET: Retrieve all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve expenses" });
  }
};

// GET: Retrieve one expense by ID
const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid expense ID" });
    }

    res.status(500).json({ message: "Failed to retrieve expense" });
  }
};

// POST: Create a new expense
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, paymentMethod, notes } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      paymentMethod,
      notes,
    });

    res.status(201).json({
      message: "Expense created successfully",
      expense,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid expense data",
        error: error.message,
      });
    }

    res.status(500).json({ message: "Failed to create expense" });
  }
};

// PUT: Update an existing expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
        omitUndefined: true,
      }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({
      message: "Expense updated successfully",
      expense,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid expense data or ID",
        error: error.message,
      });
    }

    res.status(500).json({ message: "Failed to update expense" });
  }
};

// DELETE: Remove an expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({
      message: "Expense deleted successfully",
      expense,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid expense ID" });
    }

    res.status(500).json({ message: "Failed to delete expense" });
  }
};

module.exports = {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
};
