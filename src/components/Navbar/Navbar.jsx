import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import open from "../../assets/shared/icon-hamburger.svg";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";

const links = [
  { id: 0, path: "/", label: "Home" },
  { id: 1, path: "/destination", label: "Destination" },
  { id: 2, path: "/crew", label: "Crew" },
  { id: 3, path: "/technology", label: "Technology" },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <header className="nav-wrapper">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <div className="logo-container">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <div className="divider" aria-hidden="true"></div>
        <ul className={`links-container ${isOpen ? "open" : ""}`}>
          {links.map(({ id, path, label }) => (
            <li key={id}>
              <NavLink 
                to={path} 
                className="nav-link" 
                activeClassName="active"
                exact
              >
                <span className="page-num">0{id}</span>{label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div 
          className="toggle-container" 
          onClick={toggleMenu} 
          role="button" 
          tabIndex={0} 
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
        >
          <img
            src={isOpen ? close : open}
            className={`${isOpen ? "close-icon" : "open-icon"}`}
            alt={`${isOpen ? "close-icon" : "open-icon"}`}
          />
        </div>
      </nav>
      <div className={`mask ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}></div>
    </header>
  );
}

export default Navbar;