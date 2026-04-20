import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  return (
    <nav>
      <h2>StayHealthy</h2>

      <Link to="/">Home</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>

      {isLoggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;