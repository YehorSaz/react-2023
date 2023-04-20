import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../../../services/postsService";

const Post = () => {


    const {state} = useLocation();

    const [post, setPost] = useState({});

    useEffect(() => {
        postsService.getById(state.postId).then(value => value.data).then(value => setPost(value))
    }, [state.postId]);

    const {userId, id, title, body} = post;

    return (

        <div>
            {
                post &&
                <div>
                    <div>userId: {userId}</div>
                    <div>id: {id}</div>
                    <div>title: {title}</div>
                    <div>body: {body}</div>
                </div>
            }
        </div>
    );
};

export default Post;