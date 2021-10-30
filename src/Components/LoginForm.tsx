import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('mohit@gmail.com');
  const [password, setPassword] = useState('mohit');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmailInput" className="form-label">
            Email address
          </label>
          <input
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="loginEmailInput"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPasswordInput" className="form-label">
            Password
          </label>
          <input
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="loginPasswordInput"
            value={password}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account? <Link to="/auth/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
