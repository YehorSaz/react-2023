import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

const albumsServise = {
    getAll: () => axiosService.get(urls.albums)
}

export {
    albumsServise
}