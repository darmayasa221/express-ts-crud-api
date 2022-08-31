import PasswordHash from '@Applications/useCase/security/PasswordHash';
import * as Bcrypt from 'bcrypt';

export default class BcryptPasswordHash extends PasswordHash {
  private bcrypt: typeof Bcrypt;

  private saltRound: number;

  constructor(bcrypt: typeof Bcrypt, saltRound = 10) {
    super();
    this.bcrypt = bcrypt;
    this.saltRound = saltRound;
  }

  async hash(password: string): Promise<string> {
    return this.bcrypt.hash(password, this.saltRound);
  }

  async comparePassword(password: string, hashedPassword: string): Promise<void> {
    const match = await this.bcrypt.compare(password, hashedPassword);
    if (!match) {
      throw new Error('Password Not Match!');
    }
  }
}
