import { Router } from 'express';
import { IUsersHandler } from './handler';

const routes = (router:Router, handler: IUsersHandler) => ([
  router.get('/', handler.getUsersHandler),
  router.get('/:id', handler.getUserHandler),
  router.post('/:id?', handler.postUserHandler),
]);
export default routes;