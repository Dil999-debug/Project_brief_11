import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Expense Tracker</h2>

      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/dashboard">Dashboard</NavLink>{" "}
      <NavLink to="/profile">Profile</NavLink>{" "}
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default Navbar;