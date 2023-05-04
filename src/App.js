import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {UserPage} from "./pages";
import CommentsPage from "./pages/CommentsPage";
import CarsPage from "./pages/CarsPage";



function App() {

    return (


        <Routes>

            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>

            </Route>


        </Routes>
    );
}

export default App;
