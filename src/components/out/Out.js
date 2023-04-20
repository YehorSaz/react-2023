import React from 'react';
import {Route, Routes} from "react-router-dom";

import Todos from "../outComponents/todos/Todos";
import Albums from "../outComponents/albums/Albums";
import Comments from "../outComponents/comments/Comments";
import Post from "../outComponents/posts/Post";
import HomePage from "../home/HomePage";
import Menu from "../menu/Menu";


const Out = () => {

    return (

        <div className={'out'}>

            <Menu/>
            <Routes>

                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':id'} element={<Post/>}/>
                </Route>

            </Routes>

        </div>
    );
};

export default Out;