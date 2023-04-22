import {IRes} from "../types/axiosRes.type";
import {IComments} from "../interfaces/comments.interface";
import {axiosServce} from "./axios.servce";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComments[]> => axiosServce.get(urls.comments)
};

export {
    commentService
}