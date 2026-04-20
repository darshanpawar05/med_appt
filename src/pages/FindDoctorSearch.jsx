import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctorSearch() {
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (specialty) {
      navigate(`/search/${specialty}`);
    }
  };

  return (
    <div>
      <h2>Find Doctor</h2>

      <select onChange={(e) => setSpecialty(e.target.value)}>
        <option value="">Select Specialty</option>
        <option value="cardio">Cardiologist</option>
        <option value="derma">Dermatologist</option>
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FindDoctorSearch;