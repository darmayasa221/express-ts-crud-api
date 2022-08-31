import { IUserRepository } from '@Domains/user/UserRepository';

export default class GetUsersUseCase {
  private userRepository : IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  
  async execute() {
    const users = await this.userRepository.getUsers();
    return users;
  }
}