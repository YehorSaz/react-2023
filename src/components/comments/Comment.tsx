import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IComments} from "../../interfaces/comments.interface";

interface IProps {
    comment: IComments;
}

const Comment: FC<IProps> = ({comment}) => {

    const navigate = useNavigate();

    const {id, postId, name, email, body} = comment;

    return (

        <div className={'one-comment'}>

            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>

            <button onClick={() => navigate(`${postId}`)}>See post</button>
            <hr/>

        </div>
    );
};

export {
    Comment
}