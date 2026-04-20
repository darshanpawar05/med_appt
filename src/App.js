import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sign_Up from "./pages/Sign_Up";
import Login from "./pages/Login";
import FindDoctorSearch from "./pages/FindDoctorSearch";

function App() {
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {message && <p>{message}</p>}

      <Navbar />

      <Routes>
        <Route path="/" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<FindDoctorSearch />} />
      </Routes>
    </div>
  );
}

export default App;