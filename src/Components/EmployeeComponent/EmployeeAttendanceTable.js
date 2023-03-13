import React, { useEffect, useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
import EmployeeAttendanceTableRow from "./EmployeeAttendanceTableRow";

// const user = JSON.parse(localStorage.getItem("user"));
    // const [alert, setAlert] = useState(null);
    // const [alertSeverity, setAlertSeverity] = useState(null);
    // const [open, setOpen] = useState(false);

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors},
    //   } = useForm();

    //   const onSubmit = (formState)=>{
    //         EmployeeService.markAttendance(formState)
    //         .then(response => {
    //             if (response.status === 200){
    //                 setAlert("Attendance marked successfully")
    //                 setAlertSeverity("success")
    //                 setOpen(true);
    //             }else{
    //                 setAlert("Server error")
    //                 setAlertSeverity("error")
    //                 setOpen(true);
    //             }
    //         })
    //   }
 const EmployeeAttendanceTable = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [attendance, setAttendance] = useState([]);


    useEffect(()=>{
        getAllAttendance();
    },[])
    const getAllAttendance = () => {
        EmployeeService.getAllAttendances(user.id)
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
            <div className="container">
            <span className="header-text float-left">Attendance summary</span>
            <div class="table">
                <thead>
                    <tr>
                        <th>{1}</th>
                        <th>In-time</th>
                        <th>Out-time</th>
                        <th>Approval status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map((attendance) => {
                            return <EmployeeAttendanceTableRow attendance={attendance}/>
                        })
                    }
                </tbody>
            </div>
            </div>
        </>
 }


 export default EmployeeAttendanceTable;