import { Request, Response } from 'express';
import { UserModel } from '../../user/domain/user.model';
import { AuthUseCase } from '../application/auth.usercase';

import { AuthOperation } from '../infraestruture/auth.operation';

const operation = new AuthOperation();
const useCase = new AuthUseCase(operation);
export class AuthController {
    async login(req: Request, res: Response): Promise<any> {
        const body = req.body;
        const user: Partial<UserModel> = {
            email: body.email,
            password: body.password,
        };

        const result = await useCase.login(user);
        return res.json(result);
    }

    async getNewAccessToken(req: Request, res: Response): Promise<any> {
        const params = req.params;

        const user: Partial<UserModel> = {
            refreshToken: params.refreshToken,
        };

        const result = await useCase.getNewAccessToken(user);
        if (!result) {
            res.status(401).send('user not registed');
        } else {
            res.json(result);
        }
    }
}
