
import { NextFunction, Request, Response } from 'express';






export const validateInputs = (schema: any, location: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        
        let dataToValidate

        switch (location) {
            case "params":
                dataToValidate = req.params;
                break;
            case "body":
                dataToValidate = req.body;
            
        }


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

