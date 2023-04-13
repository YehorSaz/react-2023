import React from 'react';

const OnePost = ({value}) => {
    return (

        <p>
            Post - {value.id}<br/>
            Title - {value.title}<br/>
            Body - {value.body}<br/>
        </p>
    );
};

export default OnePost;