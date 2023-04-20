import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div className={'menu'}>
                <div className={'menu-inner'}><Link to={'/'}>home</Link></div>
                <div className={'menu-inner'}><Link to={'albums'}>albums</Link></div>
                <div className={'menu-inner'}><Link to={'todos'}>todos</Link></div>
                <div className={'menu-inner'}><Link to={'comments'}>comments</Link></div>
            </div>

            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default Menu;