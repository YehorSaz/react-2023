import React from 'react';

const Cat = ({cat, dispatch}) => {

    return (

        <div>

            {cat.name}
            <button onClick={() => dispatch({type: 'DELL_CAT', payload: cat.id})}>Delete</button>

        </div>
    );
};

export default Cat;