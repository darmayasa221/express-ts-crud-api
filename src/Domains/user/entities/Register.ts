/* eslint-disable @typescript-eslint/naming-convention */
export interface IRegister {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string
}

export default class Register implements IRegister {
  public email: string;

  public name: string;

  public password: string;

  public passwordConfirm: string;

  constructor(payload: IRegister) {
    this.verifyPayload(payload);
    const { email, name, password, passwordConfirm } = payload;
    this.email = email;
    this.name = name;
    this.password  = password;
    this.passwordConfirm = passwordConfirm;
  }

  private verifyPayload(payload: IRegister) {
    const { email, name, password, passwordConfirm } = payload;
    if (!email || !name || !password || !passwordConfirm) {
      throw new Error('REGISTER.NOT_CONTAINT_NEEDED_PAYLOAD');
    }
  }
}