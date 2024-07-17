import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SavedEmployees from "./components/SavedEmployees"; // Ensure this component exists
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    console.log("Loaded employees from localStorage:", storedEmployees);
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    console.log("Saving employees to localStorage:", employees);
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSaveEmployee = (employee) => {
    if (employee.id) {
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
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

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm)
  );

  return (
    <Router>
      <div className="App">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/saved-employees">Saved Employees</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EmployeeForm
                  currentEmployee={currentEmployee}
                  onSave={handleSaveEmployee}
                />
                <EmployeeList
                  employees={filteredEmployees}
                  onEdit={handleEditEmployee}
                  onDelete={handleDeleteEmployee}
                />
              </>
            }
          />
          <Route
            path="/saved-employees"
            element={<SavedEmployees employees={employees} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
