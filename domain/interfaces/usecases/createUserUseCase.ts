import { UsersRequestModel } from '../../entities/users';

export interface CreateUserUseCase {
  create(user: UsersRequestModel): void;
}
