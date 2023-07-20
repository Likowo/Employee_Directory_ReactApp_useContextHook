import React from 'react';

// ------------Import child components
import EmployeeDirectory from './EmployeeDirectory';
import EmployeePage from './EmployeePage'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'


function HomePage(props) {
   return  (
    <div className="employeeInfor">
      <h1>{props.employee1.image}</h1>
           
    </div>
  )
}

export default HomePage