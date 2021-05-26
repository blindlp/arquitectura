import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usercase';
import { UserModel } from '../domain/user.model';
import { UserOperation } from '../infraestruture/user.operation';

const operation = new UserOperation();

const useCase = new UserUseCase(operation);

export class UserController {
    list(req: Request, res: Response) {
        const result = useCase.list();
        return res.json(result);
    }

    listOne(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
        const user: Partial<UserModel> = { id };
        const result = useCase.listOne(user);
        return res.json(result);
    }

    listByPage(req: Request, res: Response) {
        const params = req.params;
        const page = +params.page;
        const result = useCase.listByPage(page);
        return res.json(result);
    }

    async insert(req: Request, res: Response): Promise<any> {
        const body = req.body;
        const user: Partial<UserModel> = {
            name: body.name,
            email: body.email,
            photo: body.photo,
            password: body.password,
        };

        const result = useCase.insert(user);
        return res.json(result);
    }

    update(req: Request, res: Response) {
        const params = req.params;
        const body = req.body;
        const user: Partial<UserModel> = body;
        user.id = +params.id;
        const result = useCase.update(user);
        return res.json(result);
    }

    remove(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
        const user: Partial<UserModel> = { id };
        const result = useCase.remove(user);
        return res.json(result);
    }
}
