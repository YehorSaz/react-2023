import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todosService
}