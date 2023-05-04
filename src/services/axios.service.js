import axios from "axios";
import {baseURL, carsURL} from "../constants";

const axiosService = axios.create({baseURL});

const axiosCarsService = axios.create({baseURL: carsURL});

export {
    axiosService,
    axiosCarsService
}