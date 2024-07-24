import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-employee">Add Employee</Link>
        </li>
        <li>
          <Link to="/employees">Database</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
