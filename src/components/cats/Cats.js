import React from 'react';
import {useForm} from "react-hook-form";

import Cat from "./Cat";




const Cats = ({stateDispatch}) => {

    const {reset, register, handleSubmit} = useForm();
    const [{cats}, dispatch] = stateDispatch;

    const saveCat = (cat) => {
        dispatch({type: 'ADD_CAT', payload: cat})
        reset()
    };

    return (

        <div>

            <div>Cats</div>

            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'enter cat name...'} {...register('name')}/>
                <button>Save</button>
            </form>

            {
                cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch} />)
            }

        </div>

    );
};

export default Cats;