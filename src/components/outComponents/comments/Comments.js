import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Comment from "./Comment";
import {commentsService} from "../../../services/comments.service";


const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, []);

    return (

        <div className={'comments'}>

            <div className={'comments-left'}>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>

            <div className={'comments-right'}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Comments;