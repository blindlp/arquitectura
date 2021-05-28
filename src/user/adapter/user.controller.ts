import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usercase';
import { UserModel } from '../domain/user.model';
import { UserOperation } from '../infraestruture/user.operation';

const operation = new UserOperation();

const useCase = new UserUseCase(operation);

export class UserController {
    async list(req: Request, res: Response) {
        const result = await useCase.list();
        return res.json(result);
    }

    async listOne(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
        const user: Partial<UserModel> = { id };
<<<<<<< HEAD
        const result = await useCase.listOne(user);
=======
        const result = useCase.listOne(user);
>>>>>>> f59dfcd0da8a263f52aee8c292882316877dee9b
        return res.json(result);
    }

    async listByPage(req: Request, res: Response) {
        const params = req.params;
        const page = +params.page;
        const result = await useCase.listByPage(page, 20);
        return res.json(result);
    }

    async insert(req: Request, res: Response): Promise<any> {
        const body = req.body;
        const user: UserModel = {
            name: body.name,
            email: body.email,
            photo: body.photo,
            password: body.password,
        };

        const result = await useCase.insertCipher(user);
        return res.json(result);
    }

    async update(req: Request, res: Response) {
        const params = req.params;
        const body = req.body;
        const user: UserModel = body;
        const id = +params.id;
        const result = await useCase.update(user, { id });
        return res.json(result);
    }

    async remove(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
<<<<<<< HEAD

        const result = await useCase.remove({ id });
=======
        const user: Partial<UserModel> = { id };
        const result = useCase.remove(user);
>>>>>>> f59dfcd0da8a263f52aee8c292882316877dee9b
        return res.json(result);
    }
}
