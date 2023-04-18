import React from 'react';
import {carServicevice} from "../../services/cars.service";

const Car = ({car, setCarForUpdate, setAllcars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (car) => {
        const {id} = car;
        await carServicevice.deleteById(id, car)
        setAllcars(prevValue => !prevValue);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>

            <div className={'buttons'}>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar(car)}>Delete</button>
            </div>

            <hr/>

        </div>
    );
};

export default Car;