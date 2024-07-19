import React from "react";
import { Link } from "react-router-dom";

function mainPage({ setShowAddForm }) {
  return (
    <div className="mainPage">
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
    </div>
  );
}

export default mainPage;
