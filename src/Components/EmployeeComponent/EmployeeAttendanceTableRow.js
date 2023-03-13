import React from "react";


const EmployeeAttendanceTableRow = ({attendance}) => {
    return <>
        <tr>
            <td>{attendance.date}</td>
            <td>{new Date(attendance.inTime).toLocaleTimeString()}</td>
            <td>{new Date(attendance.outTime).toLocaleTimeString()}</td>
            <td>{attendance.approvalStatus}</td>
        </tr>
    </>
}

export default EmployeeAttendanceTableRow;