import { UsersRequestModel } from '../../entities/users';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';

export class UpdateUserUseCase {
  contactRepository: IUsersRepository;
  constructor(contactRepository: IUsersRepository) {
    this.contactRepository = contactRepository;
  }
  async update(id: string, user: UsersRequestModel) {
    await this.contactRepository.update(id, user);
  }
}
