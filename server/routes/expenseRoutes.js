const express = require("express");
const router = express.Router();

const {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");

// GET: Retrieve all expenses
router.get("/", getExpenses);

// GET: Retrieve one expense by ID
router.get("/:id", getExpenseById);

// POST: Create a new expense
router.post("/", createExpense);

// PUT: Update an expense by ID
router.put("/:id", updateExpense);

// DELETE: Delete an expense by ID
router.delete("/:id", deleteExpense);

module.exports = router;