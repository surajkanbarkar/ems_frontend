import axios from "axios";
import { URL } from "../Common/Common";


class LoginService {
    userLogin(formData){
        const LOGIN_URL = URL + "/api/signin";
        return axios.post(LOGIN_URL, formData)
    }
    addEmployee(formData){
        const ADD_EMPLOYEE_URL = URL + "/api/employee/add";
        return axios.post(ADD_EMPLOYEE_URL, formData)
    }
    
}

export default new LoginService;