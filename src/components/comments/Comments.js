import React, {useEffect, useState} from 'react';
import Comment from "../comment/Comment";
import {userService} from "../../services/user.service";
import CommentsForm from "../commentsForm/CommentsForm";

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [allComments, setAllComments] = useState(null);

    useEffect(() => {
        userService.getAllComments().then(value => value.data).then(value => setComments(value))
    }, [allComments]);

    return (

        <div className={'comments'}>

            <div className={'comments-left'}>
                <div className={'comments-form'}>
                    <CommentsForm setAllComments={setAllComments}/>
                </div>
            </div>


            <div className={'comments-right'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>

        </div>
    );
};

export default Comments;