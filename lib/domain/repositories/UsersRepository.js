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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepositoryImp = void 0;
const mysqlDatabase_1 = require("../../data/dataSources/mysqlDatabase");
class UsersRepositoryImp {
    constructor() {
        this.contactDataSource = new mysqlDatabase_1.UsersDataSource();
    }
    //   constructor(contactDataSource: UsersDataSource) {
    //     this.contactDataSource = contactDataSource;
    //   }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactDataSource.delete(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactDataSource.update(id, data);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDataSource.getById(id);
        });
    }
    create(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactDataSource.create(contact);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactDataSource.get();
        });
    }
}
exports.UsersRepositoryImp = UsersRepositoryImp;
