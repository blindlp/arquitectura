import express from 'express';
import Joi from 'joi';
import { UserController } from './user.controller';
import { validateInputs } from './user.validator';


const controller = new UserController()

const route = express.Router()

 
const schema = Joi.object({
    id: Joi.number().required(),
})



route.get('/', controller.list);
route.get('/:id', validateInputs(schema), controller.listOne);
route.get('/page/:page', controller.listByPage);
route.post('/', controller.insert);
route.put('/:id', controller.update);
route.delete('/:id', controller.remove);


export { route };