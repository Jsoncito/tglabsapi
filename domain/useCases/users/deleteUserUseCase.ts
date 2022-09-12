import { UsersRequestModel } from '../../entities/users';
import { IUsersRepository } from '../../interfaces/repositories/IUsersRepository';

export class DeleteUserUseCase {
  contactRepository: IUsersRepository;
  constructor(contactRepository: IUsersRepository) {
    this.contactRepository = contactRepository;
  }

  async delete(id: string) {
    await this.contactRepository.delete(id);
  }
}
