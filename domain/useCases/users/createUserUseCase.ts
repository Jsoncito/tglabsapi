import { UsersRequestModel } from '../../entities/users';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';

export class CreateUserUseCase {
  contactRepository: IUsersRepository;
  constructor(contactRepository: IUsersRepository) {
    this.contactRepository = contactRepository;
  }

  async create(user: UsersRequestModel) {
    await this.contactRepository.create(user);
  }
}
