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
exports.UserCartAddController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const UserCartAddController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, product_category, productId, price } = req.body;
    const cart = {
        userId: userId,
        product_category: product_category,
        productId: productId,
        price: price
    };
    const createCart = yield Prisma_1.default.cart.create({ data: cart });
    res.json({ cart: true });
});
exports.UserCartAddController = UserCartAddController;
