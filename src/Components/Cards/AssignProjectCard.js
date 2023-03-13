import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ProjectService from "../../Services/ProjectService";


const AssignProject = ({showa, handleClosea}) => {

    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    const onSubmit = (formState)=>{
        ProjectService.addProject(formState)
        .then(response => {
            if (response.status === 200){
                setAlert("Project added successfully")
                setAlertSeverity("success")
                setOpen(true);
            }else{
                setAlert("Server error")
                setAlertSeverity("error")
                setOpen(true);
            }
        }
        )
    }
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();
    return(
        <div>
            <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
            <input type="text" className="form-control" hidden name="userId" id="userId" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-2">
                    <label>Project Name</label>
                    <br/>
                    <input {...register('projectName', { required: true })} type={'text'} className="form-control" placeholder="Enter project name"/>
                </div>
                <div className="row p-2 justify-content-center">
                        <input type="submit" className="btn btn-success w-50" value="Add"/>
                    </div>
            </form>
        </div>
    )
}

export default AssignProject;