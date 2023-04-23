import {IRes} from "../types/axiosRes.type";
import {IPost} from "../interfaces/post.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getById: (id: string): IRes<IPost> => axiosService.get(urls.posts.byId(id))
};

export {
    postService
}