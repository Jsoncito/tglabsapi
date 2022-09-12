"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDataSource = exports.UsersDataSource = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tglabs',
});
const DBTABLE = 'user';
class UsersDataSource {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`INSERT INTO ${DBTABLE} SET`, {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    last_name: user.lastName,
                    last_login: user.lastLogin,
                }, (error, results, _fields) => {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    resolve(results.insertId);
                    return;
                });
            }));
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`SELECT *  from ${DBTABLE}`, (error, results, _fields) => {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    resolve(results);
                    return;
                });
            }));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`DELETE from ${DBTABLE} where id = ${id}`, (error, results, _fields) => {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    resolve(results.affectedRows);
                    return;
                });
            }));
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`UPDATE ${DBTABLE} SET email=?, password=?, name=?, last_name=?, last_login=? WHERE id = ?`, [
                    user.email,
                    user.password,
                    user.name,
                    user.lastName,
                    user.lastLogin,
                    id,
                ], (error, results, _fields) => {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    resolve(results.insertId);
                    return;
                });
            }));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`SELECT *  from ${DBTABLE} WHERE id = ?`, [id], (error, results, _fields) => {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    resolve(results);
                    return;
                });
            }));
        });
    }
}
exports.UsersDataSource = UsersDataSource;
class AuthDataSource {
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection.query(`SELECT *  from ${DBTABLE} WHERE email = ? and password = ?`, [user.email, user.password], (error, results, _fields) => __awaiter(this, void 0, void 0, function* () {
                    console.log('The error is: ', error);
                    if (error)
                        reject(error);
                    if (results && results.length > 0) {
                        yield connection.query(`SELECT * from userrol RIGHT JOIN rol on userrol.idRol = rol.id WHERE userrol.idUser = ?`, [results[0].id], (suberror, subresults, _fields) => {
                            if (suberror)
                                reject(suberror);
                            console.log(subresults);
                            if (subresults && subresults.length > 0) {
                                resolve({
                                    email: results[0].email,
                                    name: `${results[0].name} ${results[0].last_name}`,
                                    rol: subresults[0].name,
                                });
                                return;
                            }
                            else {
                                reject();
                                return;
                            }
                        });
                    }
                    else {
                        reject();
                        return;
                    }
                }));
            }));
        });
    }
}
exports.AuthDataSource = AuthDataSource;
