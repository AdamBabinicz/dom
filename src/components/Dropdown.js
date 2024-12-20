import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ closeDropdownAndMenu }) {
  return (
    <ul className="dropdown-menu">
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path || "/"}
              onClick={closeDropdownAndMenu}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
