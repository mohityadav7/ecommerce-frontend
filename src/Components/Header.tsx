import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IUserInfo } from '../reducers/user';
import { removeCookie } from '../utils';
import { logoutSuccess } from '../actions';

const Header = () => {
  const userData: IUserInfo = useSelector(
    (state: { user: IUserInfo }) => state.user
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    removeCookie('token');
    dispatch(logoutSuccess());
  };

  return (
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {userData.token ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userData.name}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="dropdown-item disabled" to="/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      onClick={handleLogout}
                      className="dropdown-item"
                      to="/"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li>
                <NavLink exact className="nav-link" to="/auth/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
