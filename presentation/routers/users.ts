import express from 'express';
import { Request, Response } from 'express';
import { GetUsersUseCase } from '../../domain/interfaces/usecases/getUsersUseCase';

export default function ContactsRouter(getUsersUseCase: GetUsersUseCase) {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    await getUsersUseCase
      .getAll()
      .then((response) => {
        console.log(response);
        res.send(response);
      })
      .catch((error) => {
        res.status(500).send({ message: 'Error fetching data', error: error });
      });
  });

  return router;
}
