import Joi from 'joi';

export const schemas = {
    LIST_ONE: {
        params: Joi.object({
            id: Joi.number().required(),
        }),
    },
    LIST_BY_PAGE: {
        params: Joi.object({
            page: Joi.number().min(1).required(),
        }),
    },
    INSERT: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
            //  roles: Joi.string().required(),
            photo: Joi.string(),
        }),
    },
    UPDATE: {
        params: Joi.object({
            id: Joi.number().required(),
        }),
        body: Joi.object({
            name: Joi.string(),
            email: Joi.string(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            //        roles: Joi.string(),
            photo: Joi.string(),
        }),
    },
    DELETE: {
        params: Joi.object({
            id: Joi.number().required(),
        }),
    },
};
