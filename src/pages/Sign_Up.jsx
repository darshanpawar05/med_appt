import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default SignUp;