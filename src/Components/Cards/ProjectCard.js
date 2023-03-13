import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import EmployeeService from "../../Services/EmployeeService";
import ProjectService from "../../Services/ProjectService";
import AddProject from "../ManagerComponent/AddProject";
import AssignProject from "./AssignProjectCard";
import EmployeeCard from "./EmployeeCard";

const ProjectCard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [showAddProjectModal, setsShowAddProjectModal] = useState(false)
    const [show, setShow] = useState(false)
    const handleShow = ()=> setShow(true)
    const handleClose = ()=> setShow(false)
    const [selectedValue, setSelectedValue] = useState([]);
    var temp = [];

    const [projectList, setProjectList] = useState([])
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        getAllProjects();
    }, [])

    const getAllProjects = ()=>{
        ProjectService.getAllProjects()
        .then(response => {
            if (response.status === 200){
                setAlert("Fetched all projects")
                setAlertSeverity("success")
                setOpen(true);
                
                response.data.forEach(element => {
                    ProjectService.getAllEmployeesByProject(element.id)
                    .then(response2 => {
                        if (response2.status === 200){
                            var emplo = "";
                            response2.data.forEach(emp => {
                                if (emp.firstName != undefined && emp.firstName != null){
                                    emplo += emp.firstName + ",";
                                }
                                    
                            });
                            element["employees"] = emplo;
                            
                        }
                    })
                });
                setTimeout(function(){
                    setProjectList(response.data)
                }.bind(this), 1000)
                
            }else{
                setAlert("No records found")
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    const assignProject = (projectId) =>{
        selectedValue.forEach((empId) => {
            debugger
            ProjectService.assignProjectToEmployees({"empId": empId, "projectId": projectId})
            .then(response => {
                if (response.status === 200){
                    setAlert("Project added successfully")
                    setAlertSeverity("success")
                    setOpen(true);
                    setTimeout(function(){
                        console.log(response.data)
                    }.bind(this), 100)
                }else{
                    setAlert("Server error")
                    setAlertSeverity("error")
                    setOpen(true);
                }
            }
            )
        })
        
    }
    return <div>
        <div className="card-container">
            {show ? <AddProject show={show} handleClose={handleClose}/> : null}
            <span className="header-text">Assigned projects</span>
            {
                user.position.role === 'MANAGER'?
                <button  className="btn btn-success mt-2 float-right" onClick={(e)=> setsShowAddProjectModal(handleShow)}>Add project</button>
                : 
                null
            }
            
            <hr/>
            {
                projectList.map((project) => {
                    return (
                        <>
                        <div className="card shadow p-1 mb-3 bg-white rounded projects-card">
                            <div className="card-body">
                                <h5 className="card-title">{project.projectName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text">Project Members : <b>{project.employees}</b></p>
                                {/* <Multiselect options={objectArray} displayValue="key" onSelect={(e) => } placeholder="Assign member"/> */}
                                <br/>
                                {
                                    user.position.role === 'MANAGER'?
                                    <button className="btn btn-sm btn-info float-right" onClick={(e) => assignProject(project.id)}>Assign</button>
                                    : 
                                    null
                                }
                            </div>

                        </div>
                        </>
                        
                    )
                })
            }
            
            </div>
            
        </div>

}

export default ProjectCard;