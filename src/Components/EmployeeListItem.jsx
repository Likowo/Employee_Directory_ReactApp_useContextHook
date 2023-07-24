import React from "react";

function EmployeeListItem({ employee }) {
  return (
    <div className="employeeListItem">
        <div>
          <img id="img1" src={employee.image} alt="" />
        </div>

        <div className="profilePicInfo">
          <p>
            {" "}
            Name: <strong>{employee.employeename}</strong>{" "}
          </p>
          <span>
            {" "}
            Position:<b> {employee.employeeposition} </b>
          </span>
        </div>
    
    </div>
  );
}

export default EmployeeListItem;
