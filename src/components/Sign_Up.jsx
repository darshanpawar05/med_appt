import React from "react";

function SignUp() {
  return (
    <div style={container}>
      <h2>Sign Up</h2>

      <input placeholder="Role" style={input} />
      <input placeholder="Name" style={input} />
      <input placeholder="Email" style={input} />
      <input placeholder="Phone" style={input} />
      <input placeholder="Password" type="password" style={input} />

      <button style={button}>Sign Up</button>
    </div>
  );
}

const container = {
  width: "300px",
  margin: "50px auto",
  padding: "25px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const button = {
  padding: "10px",
  width: "100%",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default SignUp;