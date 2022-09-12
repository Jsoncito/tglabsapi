import { UsersResponseModel } from '../../entities/users';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';

export class GetUsersUseCase {
  contactRepository: IUsersRepository;
  constructor(contactRepository: IUsersRepository) {
    this.contactRepository = contactRepository;
  }

  async getAll(): Promise<UsersResponseModel[]> {
    return await this.contactRepository.get();
  }
}
