import {IRes} from "../types/axiosRes.type";
import {IAlbum} from "../interfaces/album.interface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const albumService = {
    getAll: (): IRes<IAlbum[]> => axiosService.get(urls.albums)
};

export {
    albumService
}