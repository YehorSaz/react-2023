import React, {FC, useEffect, useState} from 'react';
import {IComments} from "../../interfaces/comments.interface";
import {commentService} from "../../services/comment.service";
import {Comment} from "./Comment";


const Comments: FC = () => {

    const [comments, setComments] = useState<IComments[]>([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, []);

    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {
    Comments
}