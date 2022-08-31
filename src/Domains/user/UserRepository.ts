import { IRegister } from './entities/Register';

export interface IUserRepository {
  getUsers():Promise<any>
  addUser(payload: IRegister): Promise<any>
}
export default abstract class UserRepository implements IUserRepository {
  async getUsers(): Promise<Error | any> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async addUser(payload: IRegister): Promise<Error | any> {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}