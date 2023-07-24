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
exports.LoginController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield Prisma_1.default.user.findFirst({ where: { email: email } });
    if (user) {
        const validPassword = yield bcrypt_1.default.compare(password, user.password);
        if (validPassword) {
            const accessToken = jsonwebtoken_1.default.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' });
            const refreshToken = jsonwebtoken_1.default.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
            const userToken = {
                token: refreshToken
            };
            yield Prisma_1.default.user.update({ where: { email: email }, data: userToken });
            res.cookie("access_token", accessToken, { httpOnly: true, maxAge: 60 * 1000 * 60 * 24 });
            res.cookie("refresh_token", refreshToken, { httpOnly: true, maxAge: 60 * 1000 * 60 * 24 * 31 });
            res.json({ msg: 'logged', error: '' });
        }
        else {
            res.json({ error: 'this password is wrong' });
        }
    }
    else {
        res.json({ error: 'this email is not sign up' });
    }
});
exports.LoginController = LoginController;
