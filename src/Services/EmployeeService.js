import axios from "axios";
import { URL } from "../Common/Common";

class EmployeeService{

    getAllEmployees(){
        const GET_ALL_EMPLOYEE_URL = URL + "/api/employee/all"
        return axios.get(GET_ALL_EMPLOYEE_URL);
    }
    getEmployeeManager(id){
        const GET_EMPLOYEE_MANAGER_URL = URL + "/api/employee/"+ id +"/manager";
        return axios.get(GET_EMPLOYEE_MANAGER_URL);
    }
    markAttendance(formData){
        const MARK_ATTENDANCE_URL = URL + "/api/employee/markAttendance";
        return axios.post(MARK_ATTENDANCE_URL, formData);
    }
    getAllAttendances(id){
        const GET_ALL_ATTENDANCE_URL = URL + "/api/employee/"+id+"/showAttendance";
        return axios.get(GET_ALL_ATTENDANCE_URL);
    }
    // getAllAttendancesForApproval(id, status){
    //     const GET_ALL_ATTENDANCEE_URL = URL + "/api/employee/"+id+"/showAttendance/"+status;
    //     return axios.get(GET_ALL_ATTENDANCEE_URL);
    // }
    getAllAttendancesForApproval(){
        const GET_ALL_ATTENDANCEE_URL = URL + "/api/employee/showAllAttendance/";
        return axios.get(GET_ALL_ATTENDANCEE_URL);
    }
    approveAttendance(formData){
        const APPROVE_ATTENDANCE_URL = URL + "/api/employee/approveAttendance";
        return axios.post(APPROVE_ATTENDANCE_URL, formData);
    }
        
}

export default new EmployeeService;