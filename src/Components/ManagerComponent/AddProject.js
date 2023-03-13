import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";
import EmployeeService from "../../Services/EmployeeService";
import ProjectService from "../../Services/ProjectService";


const AddProject = ({show, handleClose, project})=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);
    // const [employees, setEmployees] = useState([])
    // var temp = [];
    // const handleChange = (e) => {
    //     setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    //   }
    // const [selectedValue, setSelectedValue] = useState([]);
    // let data = [];
    useEffect(()=> {
        // getAllEmployees();
        console.log('i fire once');
    }, [])

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
    // const getAllEmployees = ()=>{
    //     EmployeeService.getAllEmployees()
    //     .then(response => {
    //         if (response.status === 200){
    //             setAlert("")
    //             setAlertSeverity("success")
    //             setOpen(true);
    //             console.log(response.data)
    //             // setTimeout(function(){
                    
    //                 debugger
    //                 response.data.forEach(emp => {
    //                 if (!temp.includes(emp.id)){
    //                     data.push({'value': emp.id, 'label': emp.firstName + " " + emp.lastName})
    //                     temp.push(emp.id);
    //                 }
                        
    //             });
    //             setTimeout(function(){
    //                 setEmployees(data)
    //             }.bind(this), 1000)
    //             // setTimeout(function(){
    //             // }.bind(this), 1000)
    //         }else{
    //             setAlert("Server error")
    //             setAlertSeverity("error")
    //             setOpen(true);
    //         }
    //     })
    // }
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <div className="row p-2">
                {/* <ReactSelect
                    className="dropdown w-100"
                    placeholder="Select Option"
                    value={employees.filter(obj => selectedValue.includes(obj.value))} // set selected values
                    options={employees} // set list of the data
                    onChange={handleChange} // assign onChange function
                    isMulti
                    isClearable
                /> */}
                </div>
                <div className="row p-2 justify-content-center">
                    <input type="submit" className="btn btn-success w-50" value="Add"/>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}
export default AddProject;