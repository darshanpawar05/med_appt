import React from "react";

function FindDoctorSearch() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Find Doctor</h2>

      <input 
        placeholder="Search doctor..."
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <button style={{
        padding: "10px",
        marginLeft: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}>
        Search
      </button>
    </div>
  );
}

export default FindDoctorSearch;