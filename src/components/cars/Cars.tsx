import React, {useEffect, useState} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "./Car";
import CarForm from "../carForm/CarForm";


const Cars = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [onChange, setOnChange] = useState<boolean>(true);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [onChange]);

    return (

        <div>

            <div>
                <CarForm setOnChange={setOnChange} carForUpdate={carForUpdate}/>
            </div>

            <div>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                      setOnChange={setOnChange}/>)}
            </div>

        </div>
    );
};

export default Cars;