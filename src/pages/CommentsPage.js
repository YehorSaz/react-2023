import React from 'react';

import {Comments, CommentsForm} from "../components";

const CommentsPage = () => {

    return (

        <div>
            <h1>Comments Page</h1>
            <CommentsForm/>
            <Comments/>
        </div>
    );
};

export default CommentsPage;