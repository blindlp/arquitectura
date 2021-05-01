import express from 'express';
import { route as routeUser } from './user/adapter/user.routes';



const app = express();

// MiddLedwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use("/users", routeUser)


export default app;

