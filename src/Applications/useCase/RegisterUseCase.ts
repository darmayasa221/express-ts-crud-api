import Register, { IRegister } from '@Domains/user/entities/Register';
import { IUserRepository } from '@Domains/user/UserRepository';
import { IPasswordHash } from './security/PasswordHash';

export default class RegisterUseCase {
  private userRepository : IUserRepository;

  private passwordHash: IPasswordHash;

  constructor(userRepository: IUserRepository, passwordHash: IPasswordHash) {
    this.userRepository = userRepository;
    this.passwordHash = passwordHash;
  }

  async execute(useCasePayload: IRegister) {
    const passwordHash = await this.passwordHash.hash(useCasePayload.password);
    const register =  new Register({ ...useCasePayload, password: passwordHash, passwordConfirm: passwordHash  });
    await this.userRepository.addUser(register);
  }
}