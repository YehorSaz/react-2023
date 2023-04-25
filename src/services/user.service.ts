import {IRes} from "../types/axiosRes.type";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getById: (id: number): IRes<IUser> => axiosService.get(urls.users.byId(id))
}

export {
    userService
}