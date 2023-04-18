import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setAllUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all"});

    const save = async (user) => {
        const {data} = await userService.createUser(user);
        setAllUsers(prev => !prev);
        console.log(data);
        reset();
    }

    return (

        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'name'} {...register('name', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ\s]{1,40}$/,
                    message: 'wrong name'
                },
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.name && <span>{errors.name.message}</span>}


            <input type={'text'} placeholder={'username'} {...register('username', {
                required: true
            }
            )}/>

            <input type={'text'} placeholder={'email'} {...register('email', {
                pattern: {
                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: 'wrong email'
                },
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.email && <span>{errors.email.message}</span>}


            <input type={'text'} placeholder={'phone'} {...register('phone', {
                pattern: {
                    value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                    message: 'wrong phone'
                },
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.phone && <span>{errors.phone.message}</span>}

            <input type={'text'} placeholder={'website'} {...register('website')}/>
            <input type={'text'} placeholder={'street'} {...register('street')}/>
            <input type={'text'} placeholder={'suite'} {...register('suite')}/>
            <input type={'text'} placeholder={'city'} {...register('city')}/>
            <input type={'text'} placeholder={'zipcode'} {...register('zipcode')}/>
            <input type={'text'} placeholder={'lat'} {...register('lat')}/>
            <input type={'text'} placeholder={'lng'} {...register('lng')}/>
            <input type={'text'} placeholder={'companyName'} {...register('companyName')}/>
            <input type={'text'} placeholder={'catchPhrase'} {...register('catchPhrase')}/>
            <input type={'text'} placeholder={'bs'} {...register('bs')}/>

            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;