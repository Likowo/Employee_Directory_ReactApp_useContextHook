import React from "react";
// import HeaderEmployee from './Components/HeaderEmployee';
import employees from "../models/employees";

function EmployeePage(props) {
  return (
    <div className="employeePage">
      <div className="employeeProfile"> Employee</div>
      <div className="profilePic">
        <div>
          <img id="img1" src={employees[1].image} alt="" />
        </div>

        <div className="profilePicInfo">
          <p>
            {" "}
            Name: <strong>{employees[1].employeename}</strong>{" "}
          </p>
          <span>
            {" "}
            Position:<b> {employees[1].employeeposition} </b>
          </span>
        </div>
      </div>
      <div className="employeeContactInfo">
        {" "}
        Call Office <br /> {employees[1].employeeofficenumber}{" "}
      </div>
      <div className="employeeContactInfo">
        {" "}
        Call Mobile <br /> {employees[1].employeemobilenumber}{" "}
      </div>
      <div className="employeeContactInfo">
        {" "}
        SMS <br />
        {employees[1].employeesms}{" "}
      </div>
      <div className="employeeContactInfo">
        {" "}
        Email <br /> {employees[1].employeeemailenumber}{" "}
      </div>
    </div>
  );
}

export default EmployeePage;
