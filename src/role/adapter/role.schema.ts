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
        }),
    },
    UPDATE: {
        params: Joi.object({
            id: Joi.number().required(),
        }),
        body: Joi.object({
            name: Joi.string(),
        }),
    },
    DELETE: {
        params: Joi.object({
            id: Joi.number().required(),
        }),
    },
};
