import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import EmployeeService from "../../Services/EmployeeService";


const MEmployeeAttendanceTableRow = ({attendance}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    const approveAttendance = (id, status)=>{
        debugger
        let formState = {'id': id, 'status': status}
        EmployeeService.approveAttendance(formState)
        .then(response => {
            if (response.status === 200){
                setAlert("Attendance marked successfully")
                setAlertSeverity("success")
                setOpen(true);
            }else{
                setAlert("Server error")
                setAlertSeverity("error")
                setOpen(true);
            }
        })
  }
    return <>
    {
                user.id === attendance.employeeId.id ?null 
                :
        <tr>
        
        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
           
                <td>{attendance.employeeId.id}</td>
                <td>{attendance.employeeId.firstName +" "+ attendance.employeeId.lastName}</td>
                <td>{attendance.date}</td>
                <td>{new Date(attendance.inTime).toLocaleTimeString()}</td>
                <td>{new Date(attendance.outTime).toLocaleTimeString()}</td>
                <td>{attendance.approvalStatus}</td>
                <td>
                    <button className="btn btn-sm btn-info" onClick={(e) => approveAttendance(attendance.id, 'APPROVED')}>Approve</button>
                    <button className="btn btn-sm btn-danger" onClick={(e) => approveAttendance(attendance.id, 'REJECTED')}>Reject</button>
                </td>
        </tr>
}
    </>
}

export default MEmployeeAttendanceTableRow;