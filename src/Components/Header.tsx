import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navbar navbar-dark bg-dark navbar-expand-lg">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        E-Commerce
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-item" to="/">
              All Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-item" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li>
            <NavLink exact className="nav-item" to="/auth/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
