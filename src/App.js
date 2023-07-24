
import './App.css';
//------------------------- Imports
  //NB: For this project, we are not using any hooks. We will be establishing state and passing down props to components
import HomePage from './Components/HomePage';
import EmployeePage from './Components/EmployeePage';
import EmployeeList from './Components/EmployeeList';
import SearchBar from './Components/SearchBar';
import employees from './models/employees';
import EmployeeDirectory from './Components/EmployeeDirectory';
import {useContext } from 'react';
import EmployeeListItem from './Components/EmployeeListItem';

//----------Establish state ( state controls data from models folder)

const state ={
  employees
}


function App() {
  // // 6: Renders What the User Sees in Real-Time 
    // NB: When you open the App.js, start by Creating the structure of the page within return. In this project I began with a parent div with className, App ; ---> an h1(name of App) and an h2- header( Employee Directory ),--> div for screenbar.
  return (
    <div className='App'>
      <HomePage />
      <EmployeePage />
    </div>
    
  );
}

export default App;
//=========================================
{/* <div className="App">
      <div className='appContainer'>
        <div className='homePage'>    
         < EmployeeDirectory/>
         < SearchBar/>
         {/* < EmployeeListItem/> */}
  // <div className='allEmployeeCont'>
  //   <div className="allEmployee">
  //     <div className='employee'></div>
  //     <div className='employee'></div>
  //     <div className='employee'></div>
  //     <div className='employee'></div>
  //     <div className='employee'></div>
  //     <div className='employee'></div>
  //   </div>
  // </div>
  //     </div>
  //       <div className='employeePage'>
  //         <EmployeePage/> 
  //       </div>
  //     </div>           
  //   </div> */}