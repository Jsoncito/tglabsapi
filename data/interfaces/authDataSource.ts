import {
  AuthRequestModel,
  AuthResponseModel,
} from '../../domain/entities/auth';

export interface UsersDataSource {
  login(user: AuthRequestModel): Promise<AuthResponseModel>;
}
