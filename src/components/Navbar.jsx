import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    window.location.reload();
  };

  return (
    <div style={{ padding: "10px", background: "#ccc" }}>
      <h2>StayHealthy</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/search">Appointments</Link> |{" "}
      
      {!isLoggedIn ? (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/">Sign Up</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Navbar;