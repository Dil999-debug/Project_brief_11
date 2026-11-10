
import { useEffect, useState } from "react";
import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../../services/budgetService";

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState("");
  const [monthlyLimit, setMonthlyLimit] = useState("");
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [notes, setNotes] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  // GET: Load budgets
  const loadBudgets = async () => {
    try {
      const data = await getBudgets();
      setBudgets(data);
      setError("");
    } catch (err) {
      setError("Failed to load budgets.");
      console.error(err);
    }
  };

  useEffect(() => {
    loadBudgets();
  }, []);

  // POST and PUT: Save budget
  const handleSubmit = async (e) => {
    e.preventDefault();

    const budgetData = {
      category,
      monthlyLimit: Number(monthlyLimit),
      month: Number(month),
      year: Number(year),
      notes,
    };

    try {
      if (editingId) {
        await updateBudget(editingId, budgetData);
      } else {
        await createBudget(budgetData);
      }

      resetForm();
      loadBudgets();
    } catch (err) {
      setError("Failed to save budget.");
      console.error(err);
    }
  };

  // Clear form
  const resetForm = () => {
    setCategory("");
    setMonthlyLimit("");
    setMonth(new Date().getMonth() + 1);
    setYear(new Date().getFullYear());
    setNotes("");
    setEditingId(null);
  };

  // Load budget into form for editing
  const handleEdit = (budget) => {
    setCategory(budget.category);
    setMonthlyLimit(budget.monthlyLimit);
    setMonth(budget.month);
    setYear(budget.year);
    setNotes(budget.notes || "");
    setEditingId(budget._id);
  };

  // DELETE: Remove budget
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this budget?")) {
      return;
    }

    try {
      await deleteBudget(id);
      loadBudgets();
    } catch (err) {
      setError("Failed to delete budget.");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Budget Management</h1>

      <h2>{editingId ? "Update Budget" : "Add New Budget"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Monthly Limit:</label>
        <input
          type="number"
          min="1"
          value={monthlyLimit}
          onChange={(e) => setMonthlyLimit(e.target.value)}
          required
        />

        <label>Month (1-12):</label>
        <input
          type="number"
          min="1"
          max="12"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />

        <label>Year:</label>
        <input
          type="number"
          min="2020"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />

        <label>Notes:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">
          {editingId ? "Update Budget" : "Add Budget"}
        </button>

        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {error && <p>{error}</p>}

      <h2>My Budgets</h2>

      {budgets.length === 0 ? (
        <p>No budgets found.</p>
      ) : (
        budgets.map((budget) => (
          <div key={budget._id}>
            <h3>{budget.category}</h3>
            <p>Monthly Limit: {budget.monthlyLimit}</p>
            <p>Month: {budget.month}</p>
            <p>Year: {budget.year}</p>
            <p>Notes: {budget.notes}</p>

            <button onClick={() => handleEdit(budget)}>
              Edit
            </button>

            <button onClick={() => handleDelete(budget._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Budget;
