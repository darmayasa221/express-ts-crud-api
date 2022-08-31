import { Options } from '@Commons/types/types';
import { NextFunction, Response, Request } from 'express';
import UsersHandler from './handler';
import routes from './routes';

export default ({ router, container }: Options) => {
  return router.use((req: Request, res:Response, next: NextFunction) => {
    const usersHandler = new UsersHandler();
    routes({ container, handler: usersHandler, router });
    next();
  });
};