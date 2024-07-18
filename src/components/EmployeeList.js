// src/components/EmployeeList.js
import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Saved Employees</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <img
              src={employee.image}
              alt={`${employee.name} ${employee.surname}`}
              width="50"
              height="50"
            />
            <p>
              {employee.name} {employee.surname}
            </p>
            <p>{employee.email}</p>
            <p>{employee.position}</p>
            <p>{employee.department}</p>
            <p>{employee.phone}</p>
            <p>{employee.startDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
