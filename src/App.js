import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUp from "./components/Sign_Up";
import Login from "./components/Login";
import FindDoctorSearch from "./components/FindDoctorSearch";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<FindDoctorSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ✅ THIS IS THE FIX */}
        <Route 
          path="/appointments" 
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              Appointments Page
            </h2>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;