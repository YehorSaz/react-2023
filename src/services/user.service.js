import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAllUsers: () => axiosService.get(urls.user),
    createUser: (user) => axiosService.post(urls.user, user),
    getAllComments: () => axiosService.get(urls.comments),
    createComment: (comment) => axiosService.post(urls.comments, comment)
}

export {
    userService
}