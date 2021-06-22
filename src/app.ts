import express, { Request, Response } from 'express';

import { ErrorHandler } from './helper/erros.handler';
import { route as routeUser } from './user/adapter/user.routes';
import { route as routeAuth } from './auth/adapter/auth.routes';
import { route as routeRole } from './role/adapter/role.routes';
import multer from 'multer';

const app = express();

// MiddLedwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

multer();

app.use('/users', routeUser);
app.use('/auth', routeAuth);
app.use('/roles', routeRole);

app.get('/health', (req: Request, res: Response) => res.send('Server Run'));

app.use(ErrorHandler.pathNotFound);

app.use(ErrorHandler.generic);

export default app;
