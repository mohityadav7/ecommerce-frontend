import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('Mohit');
  const [email, setEmail] = useState('mohit@gmail.com');
  const [phone, setPhone] = useState('9876543210');
  const [password, setPassword] = useState('mohit');
  const [confirmPassword, setConfirmPassword] = useState('mohit');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response: any = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/users/createUser`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            pwd: password,
            pwd_confirm: confirmPassword,
          }),
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            className="form-control"
            id="nameInput"
            value={name}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
            name="phone"
            type="phone"
            className="form-control"
            id="phoneInput"
            value={phone}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            name="pwd"
            type="password"
            className="form-control"
            id="passwordInput"
            value={password}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordConfirmInput" className="form-label">
            Confirm Password
          </label>
          <input
            onChange={(e: any) => {
              setConfirmPassword(e.target.value);
            }}
            name="pwd_confirm"
            type="password"
            className="form-control"
            id="passwordConfirmInput"
            value={confirmPassword}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
