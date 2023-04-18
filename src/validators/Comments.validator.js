import Joi from "joi";

const commentsValidator = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().regex(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required().messages({
        'string.pattern.base':'wrong data'
    }),
    body:Joi.string().required()
});

export {
    commentsValidator
}