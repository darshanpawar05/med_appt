import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check login status from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <div style={{ background: "#c0c8d0", padding: "10px" }}>
      <h2>StayHealthy</h2>

      <div style={{ float: "right" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/search" style={{ margin: "10px" }}>Appointments</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login" style={{ margin: "10px" }}>Login</Link>
            <Link to="/" style={{ margin: "10px" }}>Sign Up</Link>
          </>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} style={{ margin: "10px" }}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;