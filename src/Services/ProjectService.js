import axios from "axios"
import { URL } from "../Common/Common"


class ProjectService {
    addProject(formData){
        const ADD_PROJECT_URL = URL + "/api/project"
        return axios.post(ADD_PROJECT_URL, formData);
    }
    getAllProjects(){
        const GET_ALL_PROJECTS_URL = URL + "/api/project/all"
        return axios.get(GET_ALL_PROJECTS_URL);
    }
    getAllEmployeesByProject(id){
        const GET_ALL_EMPLOYEES_PROJECTS_URL = URL + "/api/project/assigned/"+id
        return axios.get(GET_ALL_EMPLOYEES_PROJECTS_URL);
    }
    assignProjectToEmployees(formData){
        const ASSIGN_PROJECT_URL = URL + "/api/employee/addProject"
        return axios.post(ASSIGN_PROJECT_URL, formData);
    }
}

export default new ProjectService;