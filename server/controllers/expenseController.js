let expenses = [];
let nextId = 1;

// GET: Retrieve all expenses
const getExpenses = (req, res) => {
  res.status(200).json(expenses);
};

// GET: Retrieve one expense by ID
const getExpenseById = (req, res) => {
  const expense = expenses.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.status(200).json(expense);
};

// POST: Create a new expense
const createExpense = (req, res) => {
  const { amount, category, description } = req.body;

  if (
    amount === undefined ||
    amount === null ||
    amount === "" ||
    !category ||
    !description ||
    !Number.isFinite(Number(amount)) ||
    Number(amount) <= 0
  ) {
    return res.status(400).json({
      message: "Please provide a valid amount, category, and description."
    });
  }

  const newExpense = {
    id: nextId++,
    amount: Number(amount),
    category,
    description
  };

  expenses.push(newExpense);

  res.status(201).json({
    message: "Expense created successfully",
    expense: newExpense
  });
};

// PUT: Update an existing expense
const updateExpense = (req, res) => {
  const expense = expenses.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  const { amount, category, description } = req.body;

  if (
    amount === undefined ||
    amount === null ||
    amount === "" ||
    !category ||
    !description ||
    !Number.isFinite(Number(amount)) ||
    Number(amount) <= 0
  ) {
    return res.status(400).json({
      message: "Please provide a valid amount, category, and description."
    });
  }

  expense.amount = Number(amount);
  expense.category = category;
  expense.description = description;

  res.status(200).json({
    message: "Expense updated successfully",
    expense
  });
};

// DELETE: Remove an expense
const deleteExpense = (req, res) => {
  const index = expenses.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Expense not found" });
  }

  const deletedExpense = expenses.splice(index, 1)[0];

  res.status(200).json({
    message: "Expense deleted successfully",
    expense: deletedExpense
  });
};

module.exports = {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense
};