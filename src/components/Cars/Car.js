import React from 'react';

import {carsService} from "../../services";
import {useDispatch} from "react-redux";
import {carsActions} from "../../redux";

const Car = ({car}) => {

    const dispatch = useDispatch();

    const {brand, price, year, id} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        dispatch(carsActions.changeTrigger())
    };

    return (

        <div>
            <hr/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car}