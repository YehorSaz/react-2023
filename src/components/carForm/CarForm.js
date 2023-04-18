import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carServicevice} from "../../services/cars.service";

const CarForm = ({setAllcars, carForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        await carServicevice.createCar(car);
        setAllcars(prevValue => !prevValue);
        reset();
    };

    const update = async (car) => {
        const {id} = carForUpdate;
        await carServicevice.updateById(id, car);
        setAllcars(prevValue => !prevValue);
    };


    return (

        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>


            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'wrong data'
                },
                required: {value: true, message: 'required'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}


            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1000000, message: 'max 1000000'},
                required: {value: true, message: 'required'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}


            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1900, message: 'min 1900'},
                max: {value: 2023, message: 'max 2023'},
                required: {value: true, message: 'required'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}


            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

        </form>
    );
};

export default CarForm;