import {
  UsersRequestModel,
  UsersResponseModel,
} from '../../domain/entities/users';
import { MysqlWrapper } from '../interfaces/mysqlWrapper';
import { IUsersRepository } from '../../domain/interfaces/repositories/IUsersRepository';
import { IAuthRepository } from '../../domain/interfaces/repositories/IAuthRepository';
import mysql from 'mysql';
import {
  AuthRequestModel,
  AuthResponseModel,
} from '../../domain/entities/auth';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tglabs',
});
const DBTABLE = 'user';
export class UsersDataSource implements IUsersRepository {
  async create(user: UsersRequestModel) {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `INSERT INTO ${DBTABLE} SET`,
        {
          name: user.name,
          email: user.email,
          password: user.password,
          last_name: user.lastName,
          last_login: user.lastLogin,
        },
        (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          resolve(results.insertId);
          return;
        }
      );
    });
  }

  async get(): Promise<UsersResponseModel[]> {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `SELECT *  from ${DBTABLE}`,
        (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          resolve(results);
          return;
        }
      );
    });
  }

  async delete(id: String) {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `DELETE from ${DBTABLE} where id = ${id}`,
        (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          resolve(results.affectedRows);
          return;
        }
      );
    });
  }

  async update(id: String, user: UsersRequestModel) {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `UPDATE ${DBTABLE} SET email=?, password=?, name=?, last_name=?, last_login=? WHERE id = ?`,
        [
          user.email,
          user.password,
          user.name,
          user.lastName,
          user.lastLogin,
          id,
        ],
        (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          resolve(results.insertId);
          return;
        }
      );
    });
  }

  async getById(id: String): Promise<UsersResponseModel | null> {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `SELECT *  from ${DBTABLE} WHERE id = ?`,
        [id],
        (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          resolve(results);
          return;
        }
      );
    });
  }
}
export class AuthDataSource implements IAuthRepository {
  async login(user: AuthRequestModel): Promise<AuthResponseModel | null> {
    return new Promise(async (resolve, reject) => {
      await connection.query(
        `SELECT *  from ${DBTABLE} WHERE email = ? and password = ?`,
        [user.email, user.password],
        async (error: any, results: any, _fields: any) => {
          console.log('The error is: ', error);
          if (error) reject(error);
          if (results && results.length > 0) {
            await connection.query(
              `SELECT * from userrol RIGHT JOIN rol on userrol.idRol = rol.id WHERE userrol.idUser = ?`,
              [results[0].id],
              (suberror: any, subresults: any, _fields: any) => {
                if (suberror) reject(suberror);
                console.log(subresults);
                if (subresults && subresults.length > 0) {
                  resolve({
                    email: results[0].email,
                    name: `${results[0].name} ${results[0].last_name}`,
                    rol: subresults[0].name,
                  });
                  return;
                } else {
                  reject();
                  return;
                }
              }
            );
          } else {
            reject();
            return;
          }
        }
      );
    });
  }
}
