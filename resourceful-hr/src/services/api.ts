import axios from "axios";
import { URLENDPOINT } from "../constants/constants";


/**
 * Singleton Employee Class to get employee data from the api code
 */
class EmployeeService {
    private static instance: EmployeeService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new EmployeeService()
        }
        return this.instance;
    }

    private async get(options = {}) {
        return await axios.get(`${URLENDPOINT}`, options);
    }

    public async getApi() {
        return await this.get();
    }

}

 const employeeService = EmployeeService.getInstance()
 export default employeeService;