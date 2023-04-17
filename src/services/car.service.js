import {axiosCarsService} from "./axios.setvice";
import {urls} from "../configs/urls";

const carService = {
    getAll: () => axiosCarsService.get(urls.cars),
    create: (car) => axiosCarsService.post(urls.cars, car),
    getById: (id) => axiosCarsService.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosCarsService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosCarsService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}