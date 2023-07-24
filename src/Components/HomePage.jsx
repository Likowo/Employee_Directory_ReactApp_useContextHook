import React from 'react';

// ------------Import child components
import EmployeeDirectory from './EmployeeDirectory';
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function HomePage(props) {
   return  (
    <div className="homePage">
     <EmployeeDirectory />
     <SearchBar />
     <EmployeeList />
    </div>
  )
}

export default HomePage