import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginService from "../../Services/LoginService";

const Login = () => {
    const [alert, setAlert] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const onSubmit = (formState)=>{
        LoginService.userLogin(formState)
        .then(response => {
            // let result = response.data;
            console.log(response)
            if (response.status === 200){
                setAlert("Authentication successful")
                setAlertSeverity("success")
                setOpen(true);
                localStorage.setItem("user", JSON.stringify(response.data));
                setTimeout(function(){
                    if (response.data.position.role === "EMPLOYEE"){
                        navigate("/ems/employee/home")
                    }                    
                    else if (response.data.position.role === "HR")
                    {
                        //navigate("/gov/petofy_home")
                    }
                    else if (response.data.position.role === "MANAGER"){
                        navigate("/ems/manager/home")
                    }
                    }.bind(this), 1000)
            }else{
                setAlert("Authentication failed")
                setAlertSeverity("error")
                setOpen(true);
            }
        })
    }
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm();
    return <div>
                <div className="card login_card text-center" style={{width:'20rem'}}>
                    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
                        <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                            {alert}
                        </Alert>
                    </Snackbar>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body mb-2">
                            <h5 className="card-title mb-4">Login</h5>
                            <input {...register('email', { required: true })} className='form-control mb-3' type={'email'} placeholder='Email'/>
                            <input {...register('password', { required: true })} className='form-control mb-4' type={'password'}  placeholder='Password'/>
                            <input className='form-control btn' type="submit" value="Login" style={{backgroundColor: '#7134eb', color: '#ededed'}}/>
                        </div>
                    </form>
                    <a href="/forgotpassword">Forgot password</a>
                    <a className="mb-4" href="/emp/register">New user? Register here</a>
                </div>
            </div>
}

export default Login;