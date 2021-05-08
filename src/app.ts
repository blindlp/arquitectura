import express, {NextFunction, Request, Response} from 'express';
import {number} from 'joi';
import {ErrorHandler} from './helper/erros.handler';
import {route as routeUser} from './user/adapter/user.routes';

const app = express();

// MiddLedwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', routeUser);

app.use(ErrorHandler.pathNotFound);

app.use(ErrorHandler.generic);

export default app;
