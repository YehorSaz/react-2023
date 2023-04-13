import React from 'react';

const FullPostInfo = ({value}) => {

    return (

        <div className={'full-post'}>
            userId - {value.userId}<br/>
            id - {value.id} <br/>
            Title - {value.title} <br/>
            Body - {value.body}
        </div>
    );
};

export default FullPostInfo;