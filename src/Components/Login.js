// Components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (existingUser) {
      navigate("/profile"); // Use navigate to redirect
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

