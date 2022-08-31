import { IRegister } from '@Domains/user/entities/Register';
import UserRepository from '@Domains/user/UserRepository';
import database from '@Infrastructures/database/mongoDB';
export default class UserRepositoryMongoDB extends UserRepository {
  private db: typeof database;

  constructor(db: typeof database) {
    super();
    this.db = db;
  }

  async getUsers(): Promise<any> {
    const usersCollection = this.db.collection('users');
    const users = await usersCollection.find().toArray();
    return users;
  }

  async addUser(payload: IRegister): Promise<any> {
    const usersCollection = this.db.collection('users');
    await usersCollection.insertOne(payload);
  }
}