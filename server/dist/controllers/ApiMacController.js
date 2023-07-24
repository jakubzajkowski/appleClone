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
exports.ApiMacNameController = exports.ApiMacController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const ApiMacController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mac = yield Prisma_1.default.mac.findMany();
    try {
        res.json(mac);
    }
    catch (_a) {
        res.status(404).send('404 Not Found Your Api');
    }
});
exports.ApiMacController = ApiMacController;
const ApiMacNameController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.name && typeof req.params.name === "string") {
        const query = req.params.name;
        const condition = query.replace(/-/gi, " ");
        const mac = yield Prisma_1.default.mac.findFirst({ where: { device_name: condition } });
        try {
            res.json(mac);
        }
        catch (_b) {
            res.status(404).send('404 Not Found Your Api');
        }
    }
    else {
        res.send('Error of param');
    }
});
exports.ApiMacNameController = ApiMacNameController;
