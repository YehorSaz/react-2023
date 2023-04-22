import React, {FC} from 'react';

import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album: IAlbum;
}

const Album: FC<IProps> = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={'one-album'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {
    Album
}