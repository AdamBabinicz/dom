import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { GiFamilyHouse } from "react-icons/gi";

function Navbar(props) {
  const [click, setClick] = useState(false); // Główne menu (w wersji mobilnej)
  const [dropdown, setDropdown] = useState(false); // Stan rozwinięcia dropdownu

  // Przełączanie głównego menu (w wersji mobilnej)
  const handleClick = () => setClick(!click);

  // Funkcja do zamknięcia głównego menu
  const closeMobileMenu = () => setClick(false);

  // Funkcja do przełączania dropdownu (rozszerzanie/zamykanie menu)
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Funkcja do zamknięcia dropdownu po kliknięciu w link
  const closeDropdownAndMenu = () => {
    setDropdown(false); // Zamyka dropdown
    setClick(false); // Zamyka główne menu
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Domy i ludzie <GiFamilyHouse className="icon" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Start
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/slider" className="nav-links" onClick={closeMobileMenu}>
              Album
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/children"
              className="nav-links"
              onClick={toggleDropdown} // Rozwija/zamyka dropdown po kliknięciu
            >
              Dzieci
              {/* Strzałka zmienia kierunek, jeśli menu jest rozwinięte */}
              <i className={`fas fa-caret-down ${dropdown ? "active" : ""}`} />
            </Link>
            {/* Pokaż dropdown tylko wtedy, gdy stan 'dropdown' jest aktywny */}
            {dropdown && (
              <Dropdown closeDropdownAndMenu={closeDropdownAndMenu} />
            )}
          </li>
          <li className="nav-item">
            <Link to="/family" className="nav-links" onClick={closeMobileMenu}>
              Rodzina
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/house" className="nav-links" onClick={closeMobileMenu}>
              Dom
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gang"
              className="nav-links"
              onClick={closeMobileMenu}
              aria-label="Zobacz naszą ferajnę"
            >
              Ferajna
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
