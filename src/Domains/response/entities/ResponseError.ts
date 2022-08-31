export interface IResponseError {
  status: string
  message: string
}

export default class ResponseError implements IResponseError {
  public status: string;

  public message: string;

  constructor(payload: IResponseError) {
    this.verifyPayload(payload);
    const { status, message } = payload;
    this.status = status;
    this.message = message;
  }

  private verifyPayload(payload: IResponseError) {
    const { status, message } = payload;
    if (!status || !message) {
      throw new Error('RESPONSE_ERROR.NOT_CONTAINT_NEEDED_PROPERTY');
    }
  }
}