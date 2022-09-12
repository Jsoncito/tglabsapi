import { AuthRequestModel, AuthResponseModel } from '../entities/auth';
import { IAuthRepository } from '../interfaces/repositories/IAuthRepository';
import { AuthDataSource } from '../../data/dataSources/mysqlDatabase';

export class AuthRepositoryImp implements IAuthRepository {
  dataSource: AuthDataSource = new AuthDataSource();

  async login(user: AuthRequestModel): Promise<AuthResponseModel | null> {
    return await this.dataSource.login(user);
  }
}
