import { Request, Response, NextFunction } from 'express';
import { IError } from '../../../helper/erros.handler';
import { UserService } from '../../../user/application/user.service';

export class AuthenticationGuard {
    static canActivate(req: Request, res: Response, next: NextFunction) {
        const headers = req.headers;
        const authenticationHeader: string = headers['authorization'];
        if (authenticationHeader) {
            const partsAuthentication = authenticationHeader.split(' ');
            if (partsAuthentication.length > 1) {
                const accessToken = partsAuthentication[1];

                UserService.validateAccessToken(accessToken).then(
                    (payload) => {
                        res.locals.payload = payload;
                        next();
                    },
                    (error) => {
                        if (error.status === 401) {
                            const error: IError = new Error(
                                'User is not authenticated'
                            );
                            error.status = 401;
                            return next(error);
                        } else if (error.status === 409) {
                            const error: IError = new Error(
                                'Access Tocken expired'
                            );
                            error.status = 409;
                            return next(error);
                        }
                    }
                );
            } else {
                const error: IError = new Error('User is not authenticated');
                error.status = 401;
                return next(error);
            }
        } else {
            const error: IError = new Error('User is not authenticated');
            error.status = 401;
            next(error);
        }
    }
}
