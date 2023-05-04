import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentsActions} from "../../redux";
import {userService} from "../../services";
import {Comment} from "./Comment";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect(() => {
        userService.getAllComments().then(value => value.data).then(value => dispatch(commentsActions.setComments(value)))
    }, [dispatch]);

    return (

        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments}