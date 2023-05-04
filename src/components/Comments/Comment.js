import React from 'react';

const Comment = ({comment}) => {

    const {id, name, body} = comment;

    return (

        <div>
            <hr/>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment}