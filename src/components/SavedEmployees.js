import React from "react";

const SavedEmployees = ({ employees }) => {
  return (
    <div className="saved-employees">
      <h2>Saved Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} {employee.surname} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedEmployees;
