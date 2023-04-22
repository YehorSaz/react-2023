import React, {FC} from 'react';
import {IComments} from "../../interfaces/comments.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    comment: IComments;
}

const Comment: FC<IProps> = ({comment}) => {

    const navigate = useNavigate();

    const {id, postId, name, email, body} = comment;

    return (
        <div className={'one=comment'}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate(`${id}`, {state:{...comment}})}>See post</button>
        </div>
    );
};

export {
    Comment
}