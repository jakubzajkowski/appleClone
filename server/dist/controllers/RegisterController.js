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
exports.RegisterController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const RegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, country, email, password, confirmPassword, birthday, phoneNumber, acceptOne, acceptTwo } = req.body;
    if (validator_1.default.isEmpty(firstName) || validator_1.default.isEmpty(lastName) || validator_1.default.isEmpty(country) || validator_1.default.isEmpty(birthday) || validator_1.default.isEmpty(email) || validator_1.default.isEmpty(password) || validator_1.default.isEmpty(confirmPassword) || validator_1.default.isEmpty(acceptOne) || validator_1.default.isEmpty(acceptTwo)) {
        res.json({ error: 'You must fill all fields*' });
    }
    else {
        const user = yield Prisma_1.default.user.findFirst({ where: { email: email } });
        if (password !== confirmPassword) {
            res.json({ error: 'confirm your password*' });
        }
        else if (user) {
            res.json({ error: 'email is used*' });
        }
        else {
            const hash = bcrypt_1.default.hashSync(password, 10);
            const userData = {
                first_name: firstName,
                last_name: lastName,
                country: country,
                birthday: birthday,
                email: email,
                password: hash,
                phone_number: phoneNumber,
                token: ''
            };
            const createUser = yield Prisma_1.default.user.create({ data: userData });
            res.json({ error: '', msg: 'Added' });
        }
    }
});
exports.RegisterController = RegisterController;
