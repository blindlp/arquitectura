import { NextFunction, Request, Response } from 'express';
import { IError } from '../../../helper/erros.handler';

export class AuthorizacionGuard {
    static canActivate(...rolesAllowed: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            const { roles } = res.locals.payload;

            let roleMatched = false;

            for (const role of roles) {
                if (rolesAllowed.indexOf(role) > -1) {
                    console.log(role.indexOf(rolesAllowed));
                    roleMatched = true;
                    next();
                    break;
                }
            }

            if (!roleMatched) {
                const error: IError = new Error(
                    "User don't have priviligies please contact your Administrator"
                );
                error.status = 401;
                return next(error);
            }
        };
    }
}
