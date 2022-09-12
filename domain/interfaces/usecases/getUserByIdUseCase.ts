import { UsersResponseModel } from '../../entities/users';

export interface GetUsersUseCase {
  getById(id: string): Promise<UsersResponseModel | null>;
}
