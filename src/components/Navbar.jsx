import React from "react";
import { Link } from "react-router-dom";
import AddContact from "./AddContactForm";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {" "}
          Contact Apps
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                All Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/family" className="nav-link">
                Family
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/friend" className="nav-link">
                Friend
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                Work
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <AddContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
