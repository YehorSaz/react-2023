import React from 'react';

const User = ({value, liftUser}) => {

    return (

        <div className={'allposts'}>

            <b>{value.id}. {value.name}</b><br/>
            Username: <b>{value.username}</b><br/>

            <button onClick={(e) => {
                liftUser(value);
            }} className={'user-button'}>Posts
            </button>

        </div>
    );
};

export default User;