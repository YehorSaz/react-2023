import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={'header'}>

            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>

        </div>
    );
};

export {
    Header
}
