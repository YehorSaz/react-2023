import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";


const Post: FC = () => {


    const [post, setPost] = useState<IPost>(null);
    const [user, setUser] = useState<IUser>(null);

    const {postId} = useParams();


    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId]);


    useEffect(() => {
        if (post) {
            userService.getById(post.userId).then(value => value.data).then(value => setUser(value))
        }
    }, [post]);


    return (

        <div className={'post'}>

            <div>

                {post && user && (

                    <div>

                        <div className={'user'}>
                            <div>name: {user.name}</div>
                            <div>username: {user.username}</div>
                            <hr/>
                        </div>

                        <div>id: {post.id}</div>
                        <div>title: {post.title}</div>
                        <div>body: {post.body}</div>

                    </div>
                )}

            </div>

        </div>
    );
};

export {
    Post
}