import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../components/comments/Comments";



const CommentsPage: FC = () => {

    return (

        <div className={'comment-page'}>

            <div className={'comments-left'}>
                <Comments/>
            </div>

            <div className={'comments-right'}>
                <Outlet/>
            </div>

        </div>
    );
};

export {
    CommentsPage
};