
const API_URL = "http://localhost:5000/api/expenses";

// GET: Retrieve all expenses
export const getExpenses = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return await response.json();
};

// POST: Create an expense
export const createExpense = async (expenseData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    throw new Error("Failed to create expense");
  }

  return await response.json();
};

// PUT: Update an expense
export const updateExpense = async (id, expenseData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    throw new Error("Failed to update expense");
  }

  return await response.json();
};

// DELETE: Delete an expense
export const deleteExpense = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }

  return await response.json();
};
