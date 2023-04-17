import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";


const CommentsForm = ({setAllComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all"});

    const saveComment = async (comment) => {
        const {data} = await userService.createComment(comment);
        setAllComments(prev => !prev);
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(saveComment)}>
            <input type={'text'} placeholder={'name'} {...register('name', {
                required: {value: true, message: 'required'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email', {
                required: {value: true, message: 'required'}
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type={'text'} placeholder={'body'} {...register('body', {
                required: {value: true, message: 'required'}
            })}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export default CommentsForm;