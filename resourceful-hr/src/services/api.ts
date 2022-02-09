import axios from "axios";
import { URLENDPOINT } from "../constants/constants";


/**
 * Singleton Employee Class to get employee data from the api code
 */
class AlbumService {
    private static instance: AlbumService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new AlbumService()
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

 const albumservice = AlbumService.getInstance()
 export default albumservice;