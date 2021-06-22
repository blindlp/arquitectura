import Joi from 'joi';

export const schemas = {
    LOGIN: {
        body: Joi.object({
            email: Joi.string().required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
        }),
    },

    REFRESH_TOKEN: {
        params: Joi.object({
            refreshToken: Joi.string().required(),
        }),
    },
};
