import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
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
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
