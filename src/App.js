import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmployeeList from "./components/addEmployeeList";
import AddEmployeeForm from "./components/employeeForm";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    role: "",
    startDate: "",
    image: "",
  });

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = () => {
    const newEmployees = [...employees, formData];
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      role: "",
      startDate: "",
      image: "",
    });
  };

  const removeEmployee = (email) => {
    const filteredEmployees = employees.filter(
      (employee) => employee.email !== email
    );
    setEmployees(filteredEmployees);
    localStorage.setItem("employees", JSON.stringify(filteredEmployees));
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.email === updatedEmployee.email ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <NavBar />
      {isHomePage && (
        <div className="hero-section">
          <video autoPlay loop muted className="hero-video">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-text">
            <h1>Welcome to the Admin Portal</h1>
          </div>
        </div>
      )}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route
            path="/add-employee"
            element={
              <AddEmployeeForm
                addEmployee={addEmployee}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/employees"
            element={
              <EmployeeList
                employees={employees}
                removeEmployee={removeEmployee}
                updateEmployee={updateEmployee}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
