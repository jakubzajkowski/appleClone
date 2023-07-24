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
exports.UserCartController = void 0;
const Prisma_1 = __importDefault(require("../db/Prisma"));
const UserCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.id && typeof req.params.id === "string") {
        const query = req.params.id;
        const userCart = yield Prisma_1.default.cart.findMany({ where: { userId: query } });
        if (userCart) {
            const products = yield Promise.all(userCart.map((product) => __awaiter(void 0, void 0, void 0, function* () {
                if (product.product_category == 'ipad') {
                    const productInfo = yield Prisma_1.default.ipad.findFirst({ where: { id: product.productId } });
                    return Object.assign(Object.assign({}, productInfo), { finalPrice: product.price, deleteId: product.id });
                }
                else if (product.product_category == 'mac') {
                    const productInfo = yield Prisma_1.default.mac.findFirst({ where: { id: product.productId } });
                    return Object.assign(Object.assign({}, productInfo), { finalPrice: product.price, deleteId: product.id });
                }
                else {
                    const productInfo = yield Prisma_1.default.iphone.findFirst({ where: { id: product.productId } });
                    return Object.assign(Object.assign({}, productInfo), { finalPrice: product.price, deleteId: product.id });
                }
            })));
            res.json(products);
        }
        else {
            res.status(401);
        }
    }
});
exports.UserCartController = UserCartController;
