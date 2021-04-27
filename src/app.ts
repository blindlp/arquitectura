import express from 'express';
import { route as routeUser } from './user/adapter/user.routes';


const app = express();

app.use("/users", routeUser)


export default app;

