import React, {useEffect, useState} from 'react';

import {albumsServise} from "../../../services/albums.servise";
import Album from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsServise.getAll().then(value => value.data).then(value => setAlbums(value))
    }, []);

    return (

        <div className={'albums'}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;