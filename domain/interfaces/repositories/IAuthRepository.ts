import { AuthRequestModel, AuthResponseModel } from '../../entities/auth';

export interface IAuthRepository {
  login(user: AuthRequestModel): Promise<AuthResponseModel | null>;
}
