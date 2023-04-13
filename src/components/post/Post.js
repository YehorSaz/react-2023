import React from 'react';


const Post = ({value, lift}) => {
    return (

        <div className={'post'}>
            {
                <div className={'left-inner'}>
                    id - {value.id} <br/>
                    title - {value.title} <br/>

                    <button onClick={() => {
                        lift(value);
                    }} className={'buttonDetails'}>details
                    </button>

                </div>
            }
        </div>
    );
};

export default Post;