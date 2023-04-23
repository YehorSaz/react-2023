import {IRes} from "../types/axiosRes.type";
import {ITodo} from "../interfaces/todo.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const todoService = {
    getAll:():IRes<ITodo[]>=>axiosService.get(urls.todos)
};

export {
    todoService
}