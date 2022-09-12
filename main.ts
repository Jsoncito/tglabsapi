import server from './server';
import UsersRouter from './presentation/routers/users';
import AuthRouter from './presentation/routers/auth';

import { GetUsersUseCase } from './domain/useCases/users/getUsersUseCase';
import { LoginUseCase } from './domain/useCases/auth/loginUseCase';
import { UsersRepositoryImp } from './domain/repositories/UsersRepository';
import { AuthRepositoryImp } from './domain/repositories/AuthRepository';
import { UsersDataSource } from './data/dataSources/mysqlDatabase';

(async () => {
  const usersMiddleWare = UsersRouter(
    new GetUsersUseCase(new UsersRepositoryImp())
  );
  const authMiddleWare = AuthRouter(new LoginUseCase(new AuthRepositoryImp()));
  // server.use('/', () => {
  //   console.log('llega');
  // });
  server.use('/users', usersMiddleWare);
  server.use('/login', authMiddleWare);
  module.exports = server.listen(4000, () =>
    console.log('Running on http://localhost:4000')
  );
})();
