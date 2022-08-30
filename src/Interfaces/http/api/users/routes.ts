import RegisterUseCase from '@Applications/useCase/RegisterUseCase';
import { NextFunction, Request, Response, Router } from 'express';
import { IUsersHandler } from './handler';

const routes = (router:Router, handler: IUsersHandler) => ([
  router.get('/', handler.getUsersHandler),
  router.get('/:id', handler.getUserHandler),
  router.post('/', [
    async (req: Request, res:Response, next:NextFunction) => {
      const registerUseCase = new RegisterUseCase();
      res.locals.registered = await registerUseCase.execute(req.body);
      next();
    }, 
    handler.postUserHandler,
  ]),
]);
export default routes;