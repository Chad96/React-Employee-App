// src/components/EmployeeForm.js
import React, { useState, useEffect } from "react";

const EmployeeForm = ({ currentEmployee, onSave }) => {
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    position: "",
    department: "",
    phone: "",
    image: "",
    startDate: "",
  });

  useEffect(() => {
    if (currentEmployee) {
      setFormState(currentEmployee);
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({
          ...formState,
          image: reader.result,
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
    // Save to localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = currentEmployee
      ? employees.map((emp) => (emp.id === formState.id ? formState : emp))
      : [...employees, { ...formState, id: new Date().getTime() }];
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setFormState({
      id: "",
      name: "",
      surname: "",
      email: "",
      position: "",
      department: "",
      phone: "",
      image: "",
      startDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formState.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={formState.surname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formState.position}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formState.department}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formState.phone}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="startDate"
        placeholder="Start Date"
        value={formState.startDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
