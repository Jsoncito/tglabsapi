import { AuthRequestModel, AuthResponseModel } from '../../entities/auth';

export interface LoginUseCase {
  login(user: AuthRequestModel): Promise<AuthResponseModel | null>;
}
