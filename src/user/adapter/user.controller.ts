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
        const id = +req.params.id;
        const user: Partial<UserModel> = {id}
        const result = useCase.listOne(user);
        return res.json(result);                
    }

    
    listByPage(req: Request, res: Response) {
        const result = useCase.listByPage(+req.params.id);
        return res.json(result);                
    }

    insert(req: Request, res: Response) {
        const user = req.body
        const result = useCase.insert(user);
        return res.json(result);                
    }

    update(req: Request, res: Response) {
        const user = req.body
        const result = useCase.update(user);
        return res.json(result);                
    }

    remove(req: Request, res: Response) {
        const user = req.body
        const result = useCase.remove(user);
        return res.json(result);                
    }
}