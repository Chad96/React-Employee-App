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
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
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
        type="url"
        name="image"
        placeholder="Image URL"
        value={formState.image}
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
