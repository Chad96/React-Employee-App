// src/App.js
import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./styles.css"; // Update the import statement
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(savedEmployees);
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="App">
      <h1>Employee Management Portal</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
