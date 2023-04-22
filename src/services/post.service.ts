import {IRes} from "../types/axiosRes.type";
import {IPost} from "../interfaces/post.interface";
import {axiosServce} from "./axios.servce";
import {urls} from "../constants/urls";

const postService = {
    getAll: (): IRes<IPost[]> => axiosServce.get(urls.posts.posts),
    getById: (id: string): IRes<IPost> => axiosServce.get(urls.posts.byId(id))
};

export {
    postService
}