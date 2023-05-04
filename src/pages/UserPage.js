import React from 'react';

import {Users, UsersForm} from "../components";

const UserPage = () => {

    return (

        <div className={'user-page'}>
            <h1>User page</h1>
            <UsersForm/>
            <Users/>
        </div>
    );
};

export {
    UserPage
}