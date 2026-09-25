import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, FooterSimple } from './components/layout';
import { AllCss } from './components/common';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
    // Send request to backend API
    fetch('/admin-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to dashboard
          return <Link to="/dashboard">Dashboard</Link>;
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        setError('Error logging in');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
      <Footer />
      <FooterSimple />
    </div>
  );
};

export default AdminLogin;