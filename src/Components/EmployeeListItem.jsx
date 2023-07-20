import React from 'react'
import employees
 from '../models/employees'
 import EmployeeList from './EmployeeList'

function EmployeeListItem(props) {
  return (
    <div className='employeeInfor'>
          <img className='imgs' src={props.employeeInfor.image}/>
          <h3>{props.employeeInfor.employeename}</h3>
          <h3>{props.employeeInfor.employeeposition}</h3>
    </div>
  )
}

export default EmployeeListItem