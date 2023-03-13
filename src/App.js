import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeHome from './Components/EmployeeComponent/EmployeeHome';
import UpdateProfile from './Components/EmployeeComponent/UpdateProfile';
import Login from './Components/Authentication/Login';
import AddEmployee from './Components/EmployeeComponent/AddEmployee';
import ManagerHome from './Components/ManagerComponent/ManagerHome';
import MEmployeeAttendanceTable from './Components/ManagerComponent/MEmployeeAttendanceTable';

function App() {
  return (
    <div className="App">
      <div className='container' style={{maxHeight: '100rem', minHeight: '43rem', minWidth: '95rem'}}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/ems/employee/home' element={<EmployeeHome />}></Route>
            <Route exact path='/ems/manager/home' element={<ManagerHome />}></Route>
            <Route exact path='/ems/attendance/approval' element={<MEmployeeAttendanceTable />}></Route>
            <Route exact path='/emp/employee/profile' element={<UpdateProfile />}></Route>
            <Route exact path='/emp/register' element={<AddEmployee />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
