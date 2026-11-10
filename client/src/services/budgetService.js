
const API_URL = "http://localhost:5000/api/budgets";

// GET: Retrieve all budgets
export const getBudgets = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch budgets");
  return await response.json();
};

// POST: Create a budget
export const createBudget = async (budgetData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(budgetData),
  });

  if (!response.ok) throw new Error("Failed to create budget");
  return await response.json();
};

// PUT: Update a budget
export const updateBudget = async (id, budgetData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(budgetData),
  });

  if (!response.ok) throw new Error("Failed to update budget");
  return await response.json();
};

// DELETE: Delete a budget
export const deleteBudget = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete budget");
  return await response.json();
};
