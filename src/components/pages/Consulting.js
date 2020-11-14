import React, { useState } from "react";
import "../../App.css";
import Text from "../Text";
import { Link } from "react-router-dom";

export default function Consulting() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div className="consulting">
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        W tym domu mieszkałem na I piętrze od 1961' do 1975'.
        <Link>
          <i className="fas fa-caret-down" />
        </Link>
        {dropdown && <Text />}
      </p>
      <h1>Adaś</h1>
    </div>
  );
}
