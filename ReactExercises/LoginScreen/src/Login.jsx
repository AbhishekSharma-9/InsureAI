import React, { useState } from 'react';
import './Login.css'; // We will create this file next
import logo from './assets/InsureAi.png'; // Use the default React logo for now

const Login = () => {
  // 'useState' is a hook to store data.
  // We store the email and password as they are typed.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // This function runs when the user clicks the "Login" button
  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the page from refreshing
    alert(`Logging in with Email: ${email} and Password: ${password}`);
    // In a real app, you'd send this data to a server
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* You can replace this logo with your own InsurAI logo */}
        <img src={logo} className="login-logo" alt="InsurAI Logo" />

        <h2>InsurAI Login</h2>
        <p>Welcome to the Corporate Policy System</p>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="login-footer">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;