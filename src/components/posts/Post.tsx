import React, {FC, useEffect, useState} from 'react';
import {IComments} from "../../interfaces/comments.interface";
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import {useAppLocation} from "../../hooks/router.hooks";




const Post: FC = () => {

    const {state} = useAppLocation<IComments>();
    console.log(state);


    const [post, setPost] = useState<IPost>(null);

    useEffect(() => {
        postService.getById(state.postId).then(value => value.data).then(value => setPost(value))
    }, [state.postId]);

    console.log(post);

    // const {userId, id, title, body} = post;

    return (

        <div className={'post'}>
            {
                post &&
                <div>
                    <div>userId: {post.userId}</div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            }
        </div>
    );
};

export {
    Post
}