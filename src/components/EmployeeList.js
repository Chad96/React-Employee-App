// src/components/EmployeeList.js
import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
