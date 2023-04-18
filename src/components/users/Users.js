import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";
import UserForm from "../uerForm/UserForm";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(value => value.data).then(value => setUsers(value))
    }, [allUsers]);

    return (

        <div className={'users'}>

            <div className={'users-left'}>
                <div className={'user-form'}>
                    <UserForm setAllUsers={setAllUsers}/>
                </div>
            </div>

            <div className={'users-right'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

        </div>
    );
};

export default Users;