
import React from "react";
import { useForm } from "react-hook-form";
import EmployeeHomeNavBar from "./EmployeeHomeNavBar";


const UpdateProfile = () => {

    return <div>
        <EmployeeHomeNavBar />
        <div className="card-container">
        <div className="card justify-content-center" style={{width:'25rem'}}>
            <div className="card-body mb-2">
                <h5 className="card-title mb-4">Your details</h5>
                <div>
                    <div className="row">
                        <div className="col">
                            Name:
                        </div>
                        <div className="col">
                            Name:
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default UpdateProfile;