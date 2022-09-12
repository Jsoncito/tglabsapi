import { AuthRequestModel, AuthResponseModel } from '../../entities/auth';
import { IAuthRepository } from '../../interfaces/repositories/IAuthRepository';

export class LoginUseCase {
  repository: IAuthRepository;
  constructor(repository: IAuthRepository) {
    this.repository = repository;
  }
  async login(user: AuthRequestModel): Promise<AuthResponseModel | null> {
    return await this.repository.login(user);
  }
}
