
import './App.css';
//------------------------- Imports
  //NB: For this project, we are not using any hooks. We will be establishing state and passing down proprs to components
import HomePage from './Components/HomePage';
import EmployeePage from './Components/EmployeePage';
import EmployeeList from './Components/EmployeeList';
import SearchBar from './Components/SearchBar';
import employees from './models/employees';

//----------Establish state ( state controls data from models folder)

const state ={
  employees
}


function App(props) {
  // // 6: Renders What the User Sees in Real-Time 
    // NB: When you open the App.js, start by Creating the structure of the page within return. In this project I began with a parent div with className, App ; ---> an h1(name of App) and an h2- header( Employee Directory ),--> div for screenbar.
  return (
    <div className="App">
      {/* <h1> How To Find Employee Information</h1> */}
      <div className='appContainer'>
        <div className='homePage'>
          <HomePage/> 
        </div>
        <div className='employeePage'>
          <EmployeePage/> 
        </div>
      </div>           
    </div>
  );
}

export default App;
