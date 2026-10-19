const express = require("express");

const app = express();

const expenseRoutes = require("../routes/expenseRoutes");
const requestLogger = require("../middleware/requestLogger");

app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

app.use("/api/expenses", expenseRoutes);

module.exports = app;