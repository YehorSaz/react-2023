import axios from "axios";
import {baseURL, carsURL} from "../configs/urls";


const axiosService = axios.create({baseURL});
const axiosCarsService = axios.create({carsURL});


export {
    axiosService,
    axiosCarsService
}