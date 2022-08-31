export interface IPasswordHash {
  hash(password:string): Promise<string>
  comparePassword(password:string, hashedPassword: string): Promise<void>
}
export default class PasswordHash {
  async hash(password:string) :Promise<Error | any> {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }

  async comparePassword(password: string, hashedPassword: string): Promise<Error | any> {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }
}