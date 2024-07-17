import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [showDatabase, setShowDatabase] = useState(false);

  // Load employees from localStorage on initial render
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    console.log("Loaded employees from localStorage:", storedEmployees);
    setEmployees(storedEmployees);
  }, []);

  // Save employees to localStorage whenever the employees state changes
  useEffect(() => {
    console.log("Saving employees to localStorage:", employees);
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSaveEmployee = (employee) => {
    if (employee.id) {
      // Update existing employee
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      // Add new employee
      employee.id = new Date().getTime();
      setEmployees([...employees, employee]);
    }
    setCurrentEmployee(null);
  };

  const handleEditEmployee = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    setCurrentEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleDatabaseClick = () => {
    setShowDatabase(!showDatabase);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm)
  );

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={handleDatabaseClick}>Database</button>
      {showDatabase && (
        <div className="database-modal">
          <h2>Saved Employees</h2>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                {employee.name} {employee.surname} - {employee.position}
              </li>
            ))}
          </ul>
        </div>
      )}
      <EmployeeForm
        currentEmployee={currentEmployee}
        onSave={handleSaveEmployee}
      />
      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default App;
