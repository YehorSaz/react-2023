import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {userValidator} from "../../validators/User.validator";

const UserForm = ({setAllUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all", resolver:joiResolver(userValidator)});

    const save = async (user) => {
        const {data} = await userService.createUser(user);
        setAllUsers(prev => !prev);
        console.log(data);
        reset();
    }

    return (

        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type={'text'} placeholder={'phone'} {...register('phone')}/>
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