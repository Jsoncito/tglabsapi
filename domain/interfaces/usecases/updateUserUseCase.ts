import { UsersRequestModel } from '../../entities/users';

export interface UpdateUserUseCase {
  update(id: string, user: UsersRequestModel): void;
}
