// Mudhala.js
import React, { useState } from 'react';

const Mudhala = ({ selectedProvider }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    height: '350px',
    margin: '20px',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const loginButtonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#3891ea',
    color: '#fff',
    cursor: 'pointer',
  };

  const validateFields = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateFields()) {
      // Perform login action
      alert(`Logging in with ${selectedProvider} account\nEmail: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        {/* Display selected provider as header */}
        <div style={headerStyle}>{selectedProvider}</div>
        <h2><b>Login</b></h2>
        <br></br>
        {/* Error Message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Email Input */}
        <input
          type="text"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Login Button */}
        <button style={loginButtonStyle} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Mudhala;
