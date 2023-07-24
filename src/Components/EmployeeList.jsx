import React from 'react'
import employees from '../models/employees'
import EmployeeListItem from './EmployeeListItem'
import { useContext,useState } from 'react'


function EmployeeList(props) {
  return (
    <div className='empList'>
      {employees.map((employee, index)=> {
        return (<EmployeeListItem employee={employee} key={index} />)
      })}
      
       
    </div>
  )
}

export default EmployeeList