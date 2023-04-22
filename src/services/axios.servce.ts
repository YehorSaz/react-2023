import axios from "axios";

import {baseURL} from "../constants/urls";

const axiosServce = axios.create({baseURL});

export {
    axiosServce
}