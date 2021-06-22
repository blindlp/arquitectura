import { Request, Response } from 'express';
import { RoleUseCase } from '../application/role.usecase';
import { RoleModel } from '../domain/role.model';
import { RoleOperation } from '../infraestruture/role.operation';

const operation = new RoleOperation();

const useCase = new RoleUseCase(operation);

export class RoleContoller {
    async list(req: Request, res: Response) {
        const result = await useCase.list();
        return res.json(result);
    }

    async listOne(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
        const role: Partial<RoleModel> = { id };
        const result = await useCase.listOne(role);
        return res.json(result);
    }

    async getOne(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;
        const role: Partial<RoleModel> = { id };
        const result = await useCase.getOne(role);
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
        const role: RoleModel = {
            name: body.name,
        };

        const result = await useCase.insert(role);
        return res.json(role);
    }

    async update(req: Request, res: Response) {
        const params = req.params;
        const body = req.body;
        const role: RoleModel = body;
        const id = +params.id;
        const result = await useCase.update(role, { id });
        return res.json(result);
    }

    async remove(req: Request, res: Response) {
        const params = req.params;
        const id = +params.id;

        const result = await useCase.remove({ id });
        return res.json(result);
    }
}
