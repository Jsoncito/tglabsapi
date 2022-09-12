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
const server_1 = __importDefault(require("./server"));
const users_1 = __importDefault(require("./presentation/routers/users"));
const auth_1 = __importDefault(require("./presentation/routers/auth"));
const getUsersUseCase_1 = require("./domain/useCases/users/getUsersUseCase");
const loginUseCase_1 = require("./domain/useCases/auth/loginUseCase");
const UsersRepository_1 = require("./domain/repositories/UsersRepository");
const AuthRepository_1 = require("./domain/repositories/AuthRepository");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const usersMiddleWare = (0, users_1.default)(new getUsersUseCase_1.GetUsersUseCase(new UsersRepository_1.UsersRepositoryImp()));
    const authMiddleWare = (0, auth_1.default)(new loginUseCase_1.LoginUseCase(new AuthRepository_1.AuthRepositoryImp()));
    // server.use('/', () => {
    //   console.log('llega');
    // });
    server_1.default.use('/users', usersMiddleWare);
    server_1.default.use('/login', authMiddleWare);
    module.exports = server_1.default.listen(4000, () => console.log('Running on http://localhost:4000'));
}))();
