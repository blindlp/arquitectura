import express from 'express';
import { UserController } from './user.controller';


const controller = new UserController()

const route = express.Router()




route.get('/', controller.list);
route.get('/:id', controller.listOne);
route.get('/page/:page', controller.listByPage);
route.post('/', controller.insert);
route.put('/:id', controller.update);
route.delete('/:id', controller.remove);


export { route };