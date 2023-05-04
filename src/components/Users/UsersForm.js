import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import {userActions} from "../../redux";

const UsersForm = () => {

    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const save = async (user) => {
        const {data} = await userService.createUser(user);
        dispatch(userActions.create({user: data}));
        reset()
    }

    return (

        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Save</button>
        </form>
    );
};

export {UsersForm}