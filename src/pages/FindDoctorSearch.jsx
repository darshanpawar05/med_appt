import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctorSearch() {
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!specialty) {
      alert("Please select a specialty");
      return;
    }

    // navigate to results page with selected specialty
    navigate(`/search?specialty=${specialty}`);
  };

  return (
    <div>
      <h2>Find Doctor</h2>

      <select onChange={(e) => setSpecialty(e.target.value)}>
        <option value="">Select Specialty</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FindDoctorSearch;