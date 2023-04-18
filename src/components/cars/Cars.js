import React, {useEffect, useState} from 'react';
import {carServicevice} from "../../services/cars.service";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {

   const [cars, setCars] = useState([]);
   const [allCars, setAllcars] = useState(null);
   const [carForUpdate, setCarForUpdate] = useState(null);
   const [carForDelete, setCarForDelete] = useState(null);

    useEffect(() => {
        carServicevice.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars]);

    return (

        <div className={'cars-block'}>

            <div className={'form-block'}>
                <CarForm setAllcars={setAllcars} carForUpdate={carForUpdate} carForDelete={carForDelete}/>
            </div>

            <div className={'all-cars'}>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} setAllcars={setAllcars}/>)}
            </div>

        </div>
    );
};

export default Cars;