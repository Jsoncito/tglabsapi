import { UsersResponseModel } from '../../entities/users';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';

export class GetUsersUseCase {
  contactRepository: IUsersRepository;
  constructor(contactRepository: IUsersRepository) {
    this.contactRepository = contactRepository;
  }
  async getById(id: string): Promise<UsersResponseModel | null> {
    return await this.contactRepository.getById(id);
  }
}
