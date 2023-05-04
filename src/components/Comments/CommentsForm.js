import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import {commentsActions} from "../../redux";

const CommentsForm = () => {

    const {reset, register, handleSubmit} =useForm();

    const dispatch = useDispatch();

    const save = async (comment) => {
        const {data} = await userService.createComment(comment);
        dispatch(commentsActions.create({comment: data}));
        reset()
    }

    return (

        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'text'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentsForm}