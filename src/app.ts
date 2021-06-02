import express from 'express';

import { ErrorHandler } from './helper/erros.handler';
import { route as routeUser } from './user/adapter/user.routes';
import { route as routeAuth } from './auth/adapter/auth.routes';

const app = express();

// MiddLedwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', routeUser);
app.use('/auth', routeAuth);

app.use(ErrorHandler.pathNotFound);

app.use(ErrorHandler.generic);

export default app;
