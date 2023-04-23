import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {

    return (

        <div className={'header'}>

            <div className={'header-inner'}><Link to={'/'}>Home</Link></div>
            <div className={'header-inner'}><Link to={'albums'}>Albums</Link></div>
            <div className={'header-inner'}><Link to={'comments'}>Comments</Link></div>
            <div className={'header-inner'}><Link to={'todos'}>Todos</Link></div>

        </div>
    );
};

export {
    Header
}