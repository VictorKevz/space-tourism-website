import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import open from "../../assets/shared/icon-hamburger.svg";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";

function Navbar() {
  const [isOpen, setopen] = useState(false);
  function toggleMenu() {
    setopen(!isOpen);
  }

  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <div className="divider"></div>
        <ul className={`links-container ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              <span className="page-num">00</span>Home
            </Link>
          </li>
          <li>
          <Link to="/destination" className="nav-link">
            <span className="page-num">01</span>Destination
            </Link>
          </li>
          <li className="nav-link">
            <span className="page-num">02</span>Crew
          </li>
          <li className="nav-link">
            <span className="page-num">03</span>Technology
          </li>
        </ul>
        <div className="toggle-container" onClick={toggleMenu}>
          <img
            src={isOpen ? close : open}
            className={`${isOpen ? "close-icon" : "open-icon"}`}
            alt={`${isOpen ? "close-icon" : "open-icon"}`}
          />
        </div>
      </nav>
      <div className={`mask ${isOpen ? "open" : ""}`}></div>
    </header>
  );
}

export default Navbar;
