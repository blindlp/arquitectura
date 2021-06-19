import express from 'express';
import { UserController } from './user.controller';
import { Validators } from '../../shared/adapter/validator';
import { schemas } from './user.schema';
import { ErrorHandler } from '../../helper/erros.handler';
import { AuthenticationGuard } from '../../shared/infraestructure/guards/authentication.guard';
import { AuthorizacionGuard } from '../../shared/infraestructure/guards/authorization.guard';
import { Upload } from '../../shared/infraestructure/middleware/upload.middleware';

const controller = new UserController();

const route = express.Router();

route.get(
    '/',
    AuthenticationGuard.canActivate,
    AuthorizacionGuard.canActivate('ADMIN'),
    controller.list
);
route.get('/:id', Validators.validate(schemas.LIST_ONE), controller.listOne);
route.get(
    '/page/:page',
    Validators.validate(schemas.LIST_BY_PAGE),
    controller.listByPage
);
route.post(
    '/',
    AuthenticationGuard.canActivate,
    AuthorizacionGuard.canActivate('ADMIN'),
    Upload.S3('photo', 'image/png', 'image/jpeg', 'image/gif'),
    Validators.validate(schemas.INSERT),
    ErrorHandler.asyncError(controller.insert)
);
route.put('/:id', Validators.validate(schemas.UPDATE), controller.update);
route.delete('/:id', Validators.validate(schemas.DELETE), controller.remove);

export { route };
