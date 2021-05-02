
import { NextFunction, Request, Response } from 'express';


export class Validators {
    static validate(objSchema: any) {
        return (req: Request, res: Response, next: NextFunction) => {        
            const listOriginParameters = ["params", "query", "body", "headers"];
    
            const listValidations: Array<Promise<any>> = [];
    
            listOriginParameters.forEach((origin: string) => {
                if(objSchema.hasOwnProperty(origin)) {
                    switch (origin) {
                        case "params":
                                listValidations.push(objSchema[origin].validate(req.params));                                                   
                            break;
                            case "query":
                                listValidations.push(objSchema[origin].validate(req.query));                                                   
                            break;
                            case "body":
                                listValidations.push(objSchema[origin].validate(req.body));                                                   
                            break;
                            case "hearders":
                                listValidations.push(objSchema[origin].validate(req.headers));                                                   
                            break;
                    
                        default:
                            break;
                    }
                }
            });
    
    
            Promise.all(listValidations).then(results => {
                const lengthResults = results.length;
                for(let ind=0; ind<lengthResults; ind++) {
                    if(results[ind].hasOwnProperty("error")) {
                       return res.status(411).json({status: 411, stack: results[0].error})
                    }
                }
                next();
    
            });
    
        };
    }
}




