import express from 'express';
import { Request, Response } from 'express';
import { AuthRequestModel } from '../../domain/entities/auth';
import { LoginUseCase } from '../../domain/interfaces/usecases/loginUseCase';

export default function AuthRouter(loginUseCase: LoginUseCase) {
  const router = express.Router();

  router.post('/', async (req: Request, res: Response) => {
    console.log('el body', req.body);
    await loginUseCase
      .login(req.body)
      .then((response) => {
        console.log(response);
        res.statusCode = 200;
        res.send(response);
      })
      .catch((error) => {
        res.status(500).send({ message: 'Error fetching data', error: error });
      });
  });

  return router;
}
