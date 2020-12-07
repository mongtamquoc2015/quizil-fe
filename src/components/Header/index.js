import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header id="header">
      <h1 id="header__logo">Quizil</h1>
      <nav id="header__nav">
        <ul id="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-links" to="/">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-links" to="/about">
              About
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
