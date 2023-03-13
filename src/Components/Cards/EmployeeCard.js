import React, { useEffect, useState } from "react";
import EmployeeService from "../../Services/EmployeeService";

const EmployeeCard =() =>{
    const user = JSON.parse(localStorage.getItem("user"));

    return <>
        <div>
        <div className="card-container">
            <span className="header-text">Info</span>
            <hr/>
            <div className="card shadow p-1 mb-3 bg-white rounded projects-card">
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName} &nbsp; {user.lastName} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Email : {user.email}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Phone : {user.phoneNumber}</h6>
                        <p className="card-text">Department: {user.department.departmentName}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default EmployeeCard;