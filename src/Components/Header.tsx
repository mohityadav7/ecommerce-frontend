import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="top-nav">
    <NavLink exact className="nav-item" to="/">
      Home
    </NavLink>
    <NavLink exact className="nav-item" to="/about">
      About
    </NavLink>
    <NavLink exact className="nav-item" to="/contact">
      Contact
    </NavLink>
  </div>
);

export default Header;
