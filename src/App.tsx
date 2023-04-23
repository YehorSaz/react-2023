import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";

import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {TodosPage} from "./pages/TodosPage";
import {HomePage} from "./pages/HomePage";


function App() {

  return (

    <Routes>

      <Route path={'/'} element={<MainLayout/>}>

          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<HomePage/>}/>

          <Route path={'comments'} element={<CommentsPage/>}>
              <Route path={':postId'} element={<PostPage/>}/>
          </Route>

          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'todos'} element={<TodosPage/>}/>

      </Route>

    </Routes>
  );
}

export default App;
