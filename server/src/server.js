
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const app = require("./app");
const connectDB = require("../config/database");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed because MongoDB connection could not be established.");
    process.exit(1);
  }
};

startServer();
