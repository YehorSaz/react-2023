import React, {FC, useEffect, useState} from 'react';

import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";

import {useParams} from "react-router-dom";


const Post: FC = () => {


    const [post, setPost] = useState<IPost>(null);

    const {postId} = useParams();


    useEffect(() => {

            postService.getById(postId).then(value => value.data).then(value => setPost(value))

    }, [postId]);


    return (

        <div className={'post'}>
            
            <div>

                {post && (
                    <div>

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