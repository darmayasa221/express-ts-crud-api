import { Routes } from '@Commons/types/types';
import { NextFunction, Request, Response } from 'express';
import { IUsersHandler } from './handler';

const routes = ({ container, handler, router }: Routes<IUsersHandler>) => ([
  router.get('/',
    [
      async (req: Request, res:Response, next:NextFunction) => {
        res.locals.data = await container.getUsersUseCase.execute();
        next();
      },
      handler.getUsersHandler,
    ]),
  router.get('/:id', handler.getUserHandler),
  router.post('/', 
    [
      async (req: Request, res:Response, next:NextFunction) => {
        await container.registerUseCase.execute(req.body);
        next();
      }, 
      handler.postUserHandler,
    ]),
]);
export default routes;