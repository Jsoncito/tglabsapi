// data/data-sources/contact-data-source.ts
import {
  UsersResponseModel,
  UsersRequestModel,
} from '../../domain/entities/users';

export interface UsersDataSource {
  create(user: UsersRequestModel): void;
  get(): Promise<UsersResponseModel[]>;
  delete(id: String): void;
  update(id: String, user: UsersRequestModel): void;
  getById(id: String): Promise<UsersResponseModel | null>;
}
