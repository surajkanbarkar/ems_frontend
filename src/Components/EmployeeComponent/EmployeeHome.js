import React from "react";
import AttendanceCard from "../Cards/AttendanceCard";
import EmployeeCard from "../Cards/EmployeeCard";
import ProjectCard from "../Cards/ProjectCard";
import EmployeeHomeNavBar from "./EmployeeHomeNavBar";

const EmployeeHome = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    
    return <>
            <EmployeeHomeNavBar />
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <ProjectCard />
                    <EmployeeCard />
                    <AttendanceCard />
                </div>
            </div>
    </>
}

export default EmployeeHome;