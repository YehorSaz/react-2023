import {IRes} from "../types/axiosRes.type";
import {IComments} from "../interfaces/comments.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComments[]> => axiosService.get(urls.comments)
};

export {
    commentService
}