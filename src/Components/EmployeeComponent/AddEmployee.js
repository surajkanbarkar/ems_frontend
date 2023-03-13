
import React from "react";
import { useForm } from "react-hook-form";
import LoginService from "../../Services/LoginService";
import EmployeeHomeNavBar from "./EmployeeHomeNavBar";


const AddEmployee = () => {
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();

      const onSubmit = (formState)=>{
        LoginService.addEmployee(formState)
        .then(response => {
            let result = response.data;
            console.log(result)
            // if (result.status === "success"){
            //     setAlert("Authentication successful")
            //     setAlertSeverity("success")
            //     setOpen(true);
            //     // localStorage.setItem("user", JSON.stringify(result));
            //     setTimeout(function(){

            //         }.bind(this), 1000)
            // }else{
            //     setAlert("Authentication failed")
            //     setAlertSeverity("error")
            //     setOpen(true);
            // }
        })
    }
    return <div>
        <EmployeeHomeNavBar />
        <div className="container-fluid">
        <div className="card text-center" style={{width:'25rem'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body mb-2">
                        <h5 className="card-title mb-4">Add employee</h5>
                        <input {...register('firstName', { required: true })} className='form-control mb-3' type={'text'} placeholder='Fist name'  />
                        <input {...register('lastName', { required: true })} className='form-control mb-3' type={'text'} placeholder='Last name'  />
                         <input {...register('email', { required: true })} className='form-control mb-3' type={'email'} placeholder='Email'  />
                        <input {...register('phoneNumber', { required: true })} className='form-control mb-3' type={'number'} placeholder='Phone number'  />
                        <input {...register('dob', { required: true })} className='form-control mb-3' type={'date'} placeholder='Date of birth'  />
                        {/* <input {...register('department_id', { required: true })} className='form-control mb-3' type={'text'} placeholder='Select department'  /> */}
                        <select className="form-control mb-3" {...register('department_id', {required: true})} >
                            <option value="">Select Department</option>
                            <option value="1">ACTS</option>
                        </select>
                        <select className="form-control mb-3" {...register('position_id', {required: true})} >
                            <option value="">Select Position</option>
                            <option value="1">Employee</option>
                            <option value="2">Hr</option>
                            <option value="3">Manager</option>
                            <option value="4">Admin</option>
                        </select>
                        {/* <input {...register('position_id', { required: true })} className='form-control mb-3' type={'text'} placeholder='Select position'  /> */}
                        <input {...register('salary', { required: true })} className='form-control mb-3' type={'text'} placeholder='salary'  />
                        {/* <input {...register('isActive', { required: true })} className='form-control mb-3' type={'text'} placeholder='Active'  /> */}
                        <input {...register('address', { required: true })} className='form-control mb-3' type={'text'} placeholder='Address'  />
                        <select className="form-control mb-3" {...register('gender', {required: true})} >
                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHERS">Others</option>
                        </select>
                        <select className="form-control mb-3" {...register('qualification', {required: true})} >
                            <option value="">Select Qualification</option>
                            <option value="MSC">MSC</option>
                            <option value="BE">BE</option>
                            <option value="BA">BA</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="BCA">BCA</option>
                        </select>
                        <input {...register('dateOfJoining', { required: true })} className='form-control mb-3' type={'date'} placeholder='Joining date'  />
                        <input className='form-control btn' type="submit"  value="Register" style={{backgroundColor: '#f06b2e', color: '#332f2d'}}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default AddEmployee;