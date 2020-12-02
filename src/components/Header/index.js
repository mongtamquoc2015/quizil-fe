import React from "react";
import "./index.css";

function Header() {
  return (
    <header id="header">
      <h1 id="header__logo">Quizil</h1>
      <navbar id="header__nav">
        <ul id="header__nav-list">
          <li class="header__nav-item">
            <a class="header__nav-links" href="#Home">
              Home
            </a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-links" href="#About">
              About
            </a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-links" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </navbar>
    </header>
  );
}

export default Header;
