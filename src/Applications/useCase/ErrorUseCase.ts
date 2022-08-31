import ResponseError, { IResponseError } from '@Domains/response/entities/ResponseError';

export default class ErrorUseCase {
  execute(useCasePayload: IResponseError) {
    return new ResponseError(useCasePayload);
  }
}