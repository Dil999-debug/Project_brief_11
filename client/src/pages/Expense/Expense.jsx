import { useState } from "react";

function Expense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category) {
      setError("Amount and category are required.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    setError("");

    console.log({
      amount,
      category,
      description,
    });

    alert("Expense added successfully!");

    setAmount("");
    setCategory("");
    setDescription("");
  };

  const handleReset = () => {
    setAmount("");
    setCategory("");
    setDescription("");
    setError("");
  };

  return (
    <div className="expense-page">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Expense</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Expense;