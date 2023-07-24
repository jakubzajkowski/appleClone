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
exports.UserController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const UserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Prisma_1.default.user.findFirst({ where: { id: req.userId.id } });
    const User = {
        id: user === null || user === void 0 ? void 0 : user.id,
        first_name: user === null || user === void 0 ? void 0 : user.first_name,
        last_name: user === null || user === void 0 ? void 0 : user.last_name,
        country: user === null || user === void 0 ? void 0 : user.country,
        birthday: user === null || user === void 0 ? void 0 : user.birthday,
        email: user === null || user === void 0 ? void 0 : user.email,
        phone_number: user === null || user === void 0 ? void 0 : user.phone_number
    };
    res.json({ user: User, error: '' });
});
exports.UserController = UserController;
