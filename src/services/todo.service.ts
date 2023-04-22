import {IRes} from "../types/axiosRes.type";
import {ITodo} from "../interfaces/todo.interface";
import {axiosServce} from "./axios.servce";
import {urls} from "../constants/urls";

const todoService = {
    getAll:():IRes<ITodo[]>=>axiosServce.get(urls.todos)
};

export {
    todoService
}