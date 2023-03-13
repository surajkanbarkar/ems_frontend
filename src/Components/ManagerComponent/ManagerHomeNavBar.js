import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ManagerHomeNavBar = () =>{
    const user = localStorage.getItem("user");
    const navigate = useNavigate();
    const logOut = () =>{
        localStorage.clear();
        navigate("/login")
    }
    return <>
        <nav className="navbar navbar-expand-md" style={{backgroundColor: '#b234fa'}}>
            <a className="navbar-brand" href="/ems/home" style={{fontWeight: "bold"}}>
                
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link className="nav-link" to="/ems/manager/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ems/attendance/approval">Approve attendance</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/emp/employee/profile">Profile</Link>
                    </li> */}
                </ul>
            </div>
            {/* <p className="float-right"></p><b>Welcome </b> */}
            <button className="btn btn logout" onClick={(e) => logOut()}>logout</button>
        </nav>  
    </>
}

export default ManagerHomeNavBar;