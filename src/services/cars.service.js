import {axiosCarsService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: () => axiosCarsService.get(urls.cars),
    createCar: (car) => axiosCarsService.post(urls.cars, car),
    updateById: (id, car) => axiosCarsService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosCarsService.delete(`${urls.cars}/${id}`)
}

export {
    carsService
}