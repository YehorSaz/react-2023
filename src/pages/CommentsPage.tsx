import React, {FC} from 'react';
import {Comments} from "../components/comments/Comments";
import {PostPage} from "./PostPage";


const CommentsPage: FC = () => {
    return (
        <div className={'comment-page'}>

            <div className={'comments- left'}><Comments/></div>

            <div className={'comments-right'}><PostPage/></div>

        </div>
    );
};

export {
    CommentsPage
};