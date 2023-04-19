import axios from "axios";

import {carsBaseURL} from "../constants/urls";


const carsAxiosService = axios.create({baseURL: carsBaseURL});

export {
    carsAxiosService
}