import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setShowAddForm }) {
  return (
    <div className="sidebar">
      <h2>Admin Portal</h2>
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

export default Sidebar;
