import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <Link to={id.toString()} state={{...comment}}>
                <div>
                    <div>postId: {postId}</div>
                    <div>id: {id}</div>
                    <div>name: {name}</div>
                    <div>email: {email}</div>
                    <div>body: {body}</div>
                    <hr/>
                </div>
            </Link>
        </div>
    );
};

export default Comment;