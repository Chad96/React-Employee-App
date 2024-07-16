// src/components/EmployeeCard.js
import React from "react";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      <img src={employee.image} alt={`${employee.name} ${employee.surname}`} />
      <h2>
        {employee.name} {employee.surname}
      </h2>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Phone: {employee.phone}</p>
      <p>Start Date: {employee.startDate}</p>
      <button onClick={() => onEdit(employee.id)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;
