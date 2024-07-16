// src/components/Header.js
import React from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <h1>Employee Management Portal</h1>
      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;
