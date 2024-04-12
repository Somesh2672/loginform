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
    <form className="loginForm" onSubmit={handleSubmit}>
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="input-box">
            <label className="input-label">Email Address:</label>
            <input placeholder="Enter your email" className="input-1" type="text" value={email} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setEmail(e.target.value)} required />     
      </div>
      <div className="input-box">
            <label className="input-label">Password:</label>
            <input placeholder="Enter Password" className="input-1" type="text" value={password} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setPassword(e.target.value)} required />  
                
      </div>
      <button className="login" type="submit">Login</button>
    </form>
  );
};

export default Login;

