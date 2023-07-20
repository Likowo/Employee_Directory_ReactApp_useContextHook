import React from 'react';
// import HeaderEmployee from './Components/HeaderEmployee';
import employees from '../models/employees';

function EmployeePage(props) {
  return (
  <div className='employeePg'>
      <div className='employeeProfile'>   Employee 
      </div>
    <div className='profilePic'>
      <div>
      <img id='img1' src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/73-512.png" alt="" />
      </div>
    
      <div className='profilePicInfo'>
        Name: <h4>{employees.employeename}</h4>
        Position:<h4> {employees.employeeposition} </h4>
      </div>
    </div>
    <div className='employeeContactInfo'> Call Office <br/> 781-000-0002 </div>
    <div className='employeeContactInfo'> Call Mobile <br/> 617-000-0002 </div>
    <div className='employeeContactInfo'> SMS <br/>617-000-0002 </div>
    <div className='employeeContactInfo'> Email <br/> jtaylor@fakemail.com </div>
  </div>
    
  );
}

export default EmployeePage