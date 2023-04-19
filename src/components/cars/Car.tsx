import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";

interface IProps {
    car: ICar;
    setOnChange: IUseState<boolean>
    setCarForUpdate: IUseState<ICar | null>
}

const Car: FC<IProps> = ({car, setOnChange, setCarForUpdate}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deliteById(id);
        setOnChange(prevState => !prevState);
    };

    return (

        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>

            <button onClick={() => setCarForUpdate(car)}>
                Update
            </button>

            <button onClick={() => deleteCar()}>
                Delete
            </button>

            <hr/>
        </div>
    );
};

export default Car;