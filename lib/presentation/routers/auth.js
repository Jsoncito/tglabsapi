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
const express_1 = __importDefault(require("express"));
function AuthRouter(loginUseCase) {
    const router = express_1.default.Router();
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log('el body', req.body);
        yield loginUseCase
            .login(req.body)
            .then((response) => {
            console.log(response);
            res.statusCode = 200;
            res.send(response);
        })
            .catch((error) => {
            res.status(500).send({ message: 'Error fetching data', error: error });
        });
    }));
    return router;
}
exports.default = AuthRouter;
