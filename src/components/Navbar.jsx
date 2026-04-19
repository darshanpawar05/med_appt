import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      backgroundColor: "#c9d6e3",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>StayHealthy</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/appointments" style={linkStyle}>Appointments</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/signup" style={linkStyle}>Sign Up</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  margin: "0 10px",
  textDecoration: "none",
  color: "black",
  fontWeight: "500"
};

export default Navbar;