import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUp from "./pages/Sign_Up";
import Login from "./pages/Login";
import FindDoctorSearch from "./pages/FindDoctorSearch";

function App() {
  // 🔔 Notification state
  const [message, setMessage] = useState("");

  // 🔔 Function to show notification
  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* 🔔 Notification display (IMPORTANT) */}
        {message && (
          <p style={{ textAlign: "center", color: "green" }}>
            {message}
          </p>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<FindDoctorSearch />} />
        </Routes>

        {/* Example button (for testing notification) */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => showNotification("Action Successful!")}>
            Test Notification
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;