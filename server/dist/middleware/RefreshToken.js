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
const Prisma_1 = __importDefault(require("../db/Prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const RefreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.access_token;
        const refresh_token = req.cookies.refresh_token;
        if (token) {
            next();
        }
        else {
            const user = yield Prisma_1.default.user.findFirst({ where: { token: refresh_token } });
            if (user) {
                const verified = jsonwebtoken_1.default.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);
                if (verified) {
                    const accessToken = jsonwebtoken_1.default.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' });
                    res.cookie("access_token", accessToken, { httpOnly: true, maxAge: 10000 });
                    next();
                }
                else {
                    throw new Error('Authentication failed!');
                }
            }
            else {
                throw new Error('Authentication failed!');
            }
        }
    }
    catch (err) {
        res.json({ error: 'Invalid token' });
    }
});
exports.default = RefreshToken;
