import {IRes} from "../types/axiosRes.type";
import {IAlbum} from "../interfaces/album.interface";
import {axiosServce} from "./axios.servce";
import {urls} from "../constants/urls";

const albumService = {
    getAll: (): IRes<IAlbum[]> => axiosServce.get(urls.albums)
};

export {
    albumService
}