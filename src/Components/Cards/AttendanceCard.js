import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EmployeeService from "../../Services/EmployeeService";
import EmployeeAttendanceTable from "../EmployeeComponent/EmployeeAttendanceTable";


const AttendanceCard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();

      const onSubmit = (formState)=>{
            EmployeeService.markAttendance(formState)
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
        <div>
            <div>
            <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
                <div className="card-container float-right">
                    <span className="header-text">Apply for attendance</span>
                    <hr/>
                    <div className="card shadow p-1 mb-3 bg-white rounded projects-card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="form-label">Select date</label>
                                    <input className="form-control" {...register('employeeId')} defaultValue={user.id} type={'number'} hidden/>
                                    <input className="form-control" {...register('date')} type={'date'}/>
                                    <label className="form-label">In-time</label>
                                    <input className="form-control" {...register('inTime')} type={'time'}/>
                                    <label className="form-label">Out-time</label>
                                    <input className="form-control" {...register('outTime')} type={'time'}/>
                                    <br/>
                                    <input className='form-control btn' type={"submit"} value={"Apply"} style={{backgroundColor: '#05a31d', color: '#f7faf7'}}/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <EmployeeAttendanceTable />
            </div>
        </div>
    </>
}


export default AttendanceCard;
