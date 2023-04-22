import {IUser} from "../interfaces/user.interface";
import {IRes} from "../types/axiosRes.type";
import {axiosServce} from "./axios.servce";
import {urls} from "../constants/urls";

const userService = {
    getAll: (): IRes<IUser[]> => axiosServce.get(urls.users.users),
    getById: (id: string): IRes<IUser> => axiosServce.get(urls.users.byId(id))
};

export {
    userService
}