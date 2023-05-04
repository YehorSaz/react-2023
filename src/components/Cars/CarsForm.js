import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";


import {carValidator} from "../../validators";
import {carsService} from "../../services";
import {carsActions} from "../../redux";

const CarsForm = () => {

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carsService.createCar(car);
        dispatch(carsActions.changeTrigger());
        reset()
    };

    const update = async (car) => {
        await carsService.updateById(carForUpdate.id, car);
        dispatch(carsActions.changeTrigger());
        reset()
    };


    return (

        <div>

            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>


                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}


                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}


                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}


                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

            </form>

        </div>
    );
};

export {CarsForm}