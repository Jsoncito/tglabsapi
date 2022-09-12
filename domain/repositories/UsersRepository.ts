// domain/repositories/contact-repository.ts
import { UsersRequestModel, UsersResponseModel } from '../entities/users';
import { IUsersRepository } from '../interfaces/repositories/IUsersRepository';
import { UsersDataSource } from '../../data/dataSources/mysqlDatabase';

export class UsersRepositoryImp implements IUsersRepository {
  contactDataSource: UsersDataSource = new UsersDataSource();
  //   constructor(contactDataSource: UsersDataSource) {
  //     this.contactDataSource = contactDataSource;
  //   }
  async delete(id: String) {
    await this.contactDataSource.delete(id);
  }
  async update(id: String, data: UsersRequestModel) {
    await this.contactDataSource.update(id, data);
  }
  async getById(id: String): Promise<UsersResponseModel | null> {
    return await this.contactDataSource.getById(id);
  }

  async create(contact: UsersRequestModel) {
    await this.contactDataSource.create(contact);
  }
  async get(): Promise<UsersResponseModel[]> {
    return await this.contactDataSource.get();
  }
}
