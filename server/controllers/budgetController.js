const Budget = require("../models/Budget");

// CREATE: Add a new budget
const createBudget = async (req, res) => {
  try {
    const budget = await Budget.create(req.body);

    res.status(201).json({
      message: "Budget created successfully",
      budget,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// READ ALL: Get all budgets
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();

    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ONE: Get budget by ID
const getBudgetById = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);

    if (!budget) {
      return res.status(404).json({
        message: "Budget not found",
      });
    }

    res.status(200).json(budget);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE: Update budget
const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!budget) {
      return res.status(404).json({
        message: "Budget not found",
      });
    }

    res.status(200).json({
      message: "Budget updated successfully",
      budget,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE: Delete budget
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);

    if (!budget) {
      return res.status(404).json({
        message: "Budget not found",
      });
    }

    res.status(200).json({
      message: "Budget deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};