import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ\s]{1,40}$/).required().messages({
        'string.pattern.base': 'wrong data',
    }),
    username: Joi.string().required(),
    email: Joi.string().regex(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required().messages({
        'string.pattern.base': 'wrong data',
    }),
    phone: Joi.string().regex(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/).required().messages({
        'string.pattern.base': 'wrong data',
    })
});

export {
    userValidator
}