import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Expense Tracker</h2>

      <Link to="/">Home</Link>{" "}
      <Link to="/dashboard">Dashboard</Link>{" "}
      <Link to="/profile">Profile</Link>{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;