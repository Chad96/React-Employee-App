// src/components/EmployeeForm.js
import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    id: "",
    email: "",
    position: "",
    department: "",
    phone: "",
    image: null,
    startDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleImageChange = (e) => {
    setEmployee({ ...employee, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      name: "",
      surname: "",
      id: "",
      email: "",
      position: "",
      department: "",
      phone: "",
      image: null,
      startDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="surname"
        value={employee.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <input
        name="id"
        value={employee.id}
        onChange={handleChange}
        placeholder="ID Number"
        required
      />
      <input
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        name="department"
        value={employee.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="date"
        name="startDate"
        value={employee.startDate}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
