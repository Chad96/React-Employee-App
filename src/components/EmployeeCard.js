import React from "react";
import "../styles.css"; // Ensure to import your CSS file

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const isExternalUrl = (url) => {
    try {
      return new URL(url).origin !== window.location.origin;
    } catch {
      return false;
    }
  };

  const getImageSrc = (image) => {
    return isExternalUrl(image) ? image : `${process.env.PUBLIC_URL}/${image}`;
  };

  return (
    <div className="employee-card">
      <img
        src={getImageSrc(employee.image)}
        alt={`${employee.name} ${employee.surname}`}
      />
      <h2>
        {employee.name} {employee.surname}
      </h2>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Phone: {employee.phone}</p>
      <p>Start Date: {employee.startDate}</p>
      <div>
        <button onClick={() => onEdit(employee.id)}>Edit</button>
        <button onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
