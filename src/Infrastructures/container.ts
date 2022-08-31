import GetUsersUseCase from '@Applications/useCase/GetUsersUseCase';
import RegisterUseCase from '@Applications/useCase/RegisterUseCase';
import database from './database/mongoDB';
import UserRepositoryMongoDB from './repository/UserRepositoryMongoDB';
import BcryptPasswordHash from './security/BcyrptPasswordHash';
import * as Bcrypt from 'bcrypt';
const userRepository = new UserRepositoryMongoDB(database);
const getUsersUseCase = new GetUsersUseCase(userRepository);
const passwordHash = new BcryptPasswordHash(Bcrypt);
const registerUseCase = new RegisterUseCase(userRepository, passwordHash);
export default {
  getUsersUseCase,
  registerUseCase,
};