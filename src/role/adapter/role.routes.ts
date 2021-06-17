import express from 'express';
import { RoleContoller } from './role.controller';
import { Validators } from '../../shared/adapter/validator';
import { schemas } from './role.schema';
import { ErrorHandler } from '../../helper/erros.handler';
import { AuthenticationGuard } from '../../shared/infraestructure/guards/authentication.guard';

const controller = new RoleContoller();

const route = express.Router();

route.get('/', AuthenticationGuard.canActivate, controller.list);
route.get('/:id', Validators.validate(schemas.LIST_ONE), controller.listOne);
route.get(
    '/page/:page',
    Validators.validate(schemas.LIST_BY_PAGE),
    controller.listByPage
);
route.post(
    '/',
    Validators.validate(schemas.INSERT),
    ErrorHandler.asyncError(controller.insert)
);
route.put('/:id', Validators.validate(schemas.UPDATE), controller.update);
route.delete('/:id', Validators.validate(schemas.DELETE), controller.remove);

export { route };
