import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {commentsValidator} from "../../validators/Comments.validator";

const CommentsForm = ({setAllComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all", resolver:joiResolver(commentsValidator)});

    const saveComment = async (comment) => {
        const {data} = await userService.createComment(comment);
        setAllComments(prev => !prev);
        console.log(data);
        reset();
    };

    return (

        <form onSubmit={handleSubmit(saveComment)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type={'text'} placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export default CommentsForm;