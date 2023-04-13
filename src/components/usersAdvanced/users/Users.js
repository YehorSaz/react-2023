import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = ({liftUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => {
                setUsers(allUsers);
            });
    }, []);

    return (

        <div>

            <div className={'users'}>
                {
                    users.map(value =>
                        <User
                            value={value}
                            liftUser={liftUser}
                            key={value.id}/>
                    )
                }
            </div>
        </div>
    );
};

export default Users;