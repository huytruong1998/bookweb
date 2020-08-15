import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/write">
          Write
        </Link>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className=" navbar navbar-expand-sm navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevConnector
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/read">
                Read
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form>
                <div className="search-bar">
                  <input
                    id="search-box"
                    type="text"
                    className="search-box"
                    placeholder="Search"
                  />
                </div>
              </form>
            </li>

            {guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
