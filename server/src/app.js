
const express = require("express");
const cors = require("cors");
const app = express();

const expenseRoutes = require("../routes/expenseRoutes");
const requestLogger = require("../middleware/requestLogger");

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

app.use("/api/expenses", expenseRoutes);

module.exports = app;
