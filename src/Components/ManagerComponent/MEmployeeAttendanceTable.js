import React, { useEffect, useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
import ManagerHomeNavBar from "./ManagerHomeNavBar";
import MEmployeeAttendanceTableRow from "./MEmployeeAttendanceTableRow";
import EmployeeAttendanceTableRow from "./MEmployeeAttendanceTableRow";


 const MEmployeeAttendanceTable = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [attendance, setAttendance] = useState([]);

    useEffect(()=>{
        getAllAttendance();
    },[])
    const getAllAttendance = () => {
        EmployeeService.getAllAttendancesForApproval()
        .then(response => {
            debugger
            console.log(response.data)
            if (response.status === 200){
                setAttendance(response.data)
            }else{
            }
        })
    }
        return <>
            <ManagerHomeNavBar />
            <div className="container mt-4 justify-content-center">
            
            <div className="container">
                <p className="header-text">Approve employees attendance</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Employee id</th>
                            <th>Employee name</th>
                            <th>Date</th>
                            <th>In-time</th>
                            <th>Out-time</th>
                            <th>Approval status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendance.map((attendance) => {
                                return <MEmployeeAttendanceTableRow attendance={attendance}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            </div>
        </>
 }


 export default MEmployeeAttendanceTable;