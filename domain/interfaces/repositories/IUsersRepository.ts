import { UsersRequestModel, UsersResponseModel } from '../../entities/users';

export interface IUsersRepository {
  create(contact: UsersRequestModel): void;
  delete(id: String): void;
  update(id: String, data: UsersRequestModel): void;
  get(): Promise<UsersResponseModel[]>;
  getById(id: String): Promise<UsersResponseModel | null>;
}
