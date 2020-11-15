import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="gang">
      <button className="btn">Ferajna</button>
    </Link>
  );
}
