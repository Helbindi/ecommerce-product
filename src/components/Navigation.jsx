import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";

function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const menuImg = isActive ? close : menu;

  function handleActive(e) {
    e.preventDefault();
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  return (
    <header className="nav-header">
      <img
        className="nav-mobile-toggle"
        src={menuImg}
        alt="mobile-menu-btn"
        onClick={(e) => handleActive(e)}
      />
      <img src={logo} alt="product-logo" />
      <nav className="nav-container" aria-expanded={isActive}>
        <ul className="nav-list">
          <li className="list-item">Collection</li>
          <li className="list-item">Men</li>
          <li className="list-item">Women</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
