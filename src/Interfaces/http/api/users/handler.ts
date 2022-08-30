import { IRegister } from '@Domains/user/entities/Register';
import { Request, Response } from 'express';

export interface IUsersHandler {
  getUsersHandler(req:Request, res:Response):any
  getUserHandler(req:Request, res:Response):any
  postUserHandler(req:Request, res:Response):any
}

export default class UsersHandler implements IUsersHandler {
  async getUsersHandler(req: Request, res: Response) {
    res
      .json({
        status: 'success',
        message: 'get users',
        data: [],
      });
  }
 
  async getUserHandler(req: Request, res: Response) {
    console.log(req.params);
    res
      .json({
        status: 'success',
        message: 'get user',
        data: [],
      });
  }

  async postUserHandler(req: Request, res: Response<{ status: string, message: string, data: IRegister }>) {
    res
      .status(201)
      .json({
        status:'success',
        message:'register success',
        data : res.locals.registered,
      });
  }
}