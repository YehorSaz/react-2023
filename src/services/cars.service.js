import {axiosCarsService} from "./axios.setvice";
import {urls} from "../configs/urls";


const carServicevice = {
    getAll: () => axiosCarsService.get(urls.cars),
    createCar: (car) => axiosCarsService.post(urls.cars, car),
    getById: (id) => axiosCarsService.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosCarsService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosCarsService.delete(`${urls.cars}/${id}`)
}

export {
    carServicevice
}