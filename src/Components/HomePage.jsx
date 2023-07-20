import React from 'react';

// ------------Import child components
import EmployeeDirectory from './EmployeeDirectory';
import EmployeePage from './EmployeePage'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'
import employees from '../models/employees';


function HomePage(props) {
   return  (
    <div className="HomePg">
      <div className='employee'></div>
      <div className='employee'></div>
      <div className='employee'></div>
      <div className='employee'></div>
      <div className='employee'></div>
      <div className='employee'></div>
           
    </div>
  )
}

export default HomePage