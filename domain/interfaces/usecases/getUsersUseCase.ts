import { UsersResponseModel } from '../../entities/users';

export interface GetUsersUseCase {
  getAll(): Promise<UsersResponseModel[]>;
}
