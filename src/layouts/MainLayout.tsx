import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/comments/header/Header";


const MainLayout: FC = () => {

    return (

        <div className={'home'}>

            <Header/>

            <div className={'wrapper'}>

                <Outlet/>

            </div>

        </div>
    );
};

export {
    MainLayout
};