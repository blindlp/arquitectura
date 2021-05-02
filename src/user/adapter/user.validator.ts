
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';





export const validateInputs = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const dataToValidate = req.params;
        const result = schema.validate(dataToValidate)
        if(result.hasOwnProperty("error")) {
            return res.status(411).json({status: 411, stack: result.error})
        }
    
        next();  
    }

}

/*
export const validationUser = (req: Request, res: Response, next: NextFunction) => {

    const dataToValidate = req.params;
    
    const schema = Joi.object({
        id: Joi.number().required(),
    })

    const result = schema.validate(dataToValidate)
    if(result.hasOwnProperty("error")) {
        return res.status(411).json({status: 411, stack: result.error})
    }

    next();    
    
  
};

*/

