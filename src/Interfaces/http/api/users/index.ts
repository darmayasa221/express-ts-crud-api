import { NextFunction, Response, Router, Request } from 'express';
import UsersHandler from './handler';
import routes from './routes';

export default (options: Router) => {
  return options.use((req: Request, res:Response, next: NextFunction) => {
    const usersHandler = new UsersHandler();
    routes(options, usersHandler);
    next();
  });
};