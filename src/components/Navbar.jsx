import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ background: "#c0c8d0", padding: "10px" }}>
      <h2>StayHealthy</h2>

      <div style={{ float: "right" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/search" style={{ margin: "10px" }}>Appointments</Link>
        <Link to="/login" style={{ margin: "10px" }}>Login</Link>
        <Link to="/" style={{ margin: "10px" }}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Navbar;