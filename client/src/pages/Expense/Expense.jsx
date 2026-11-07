
import { useState, useEffect } from "react";

import {
  getExpenses,
  createExpense
} from "../../services/expenseService";

function Expense() {
  // Form states
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Message states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Expense records
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  // GET: Load expenses from MongoDB
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (err) {
        setFetchError("Unable to load expenses.");
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  // POST: Add a new expense
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      setError("Title, amount and category are required.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    try {
      setError("");
      setSuccess("");

      const newExpense = {
        title,
        amount: Number(amount),
        category,
        notes: description,
      };

      const result = await createExpense(newExpense);

      setExpenses((prev) => [result.expense, ...prev]);

      setSuccess("Expense added successfully!");

      setTitle("");
      setAmount("");
      setCategory("");
      setDescription("");
    } catch (err) {
      setError("Failed to add expense.");
    }
  };

  // Reset form
  const handleReset = () => {
    setTitle("");
    setAmount("");
    setCategory("");
    setDescription("");
    setError("");
    setSuccess("");
  };

  return (
    <div className="expense-page">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
        </select>

        <label>Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {error && <p>{error}</p>}
        {success && <p>{success}</p>}

        <button type="submit">Add Expense</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Expense Records</h2>

      {loading && <p>Loading expenses...</p>}
      {fetchError && <p>{fetchError}</p>}

      {!loading && !fetchError && expenses.length === 0 && (
        <p>No expenses found.</p>
      )}

      {!loading && !fetchError && expenses.map((expense) => (
        <div key={expense._id}>
          <h3>{expense.title}</h3>
          <p>Amount: ₹{expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Notes: {expense.notes}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Expense;
