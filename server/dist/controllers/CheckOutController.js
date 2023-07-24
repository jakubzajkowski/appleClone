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
exports.CheckOutController = void 0;
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });
const CheckOutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.body;
    if (data.length != 0) {
        try {
            const params = {
                payment_method_types: ['card', 'p24', 'paypal', "blik"],
                mode: 'payment',
                line_items: data.map((item) => {
                    return {
                        price_data: {
                            currency: 'pln',
                            product_data: {
                                images: [item.img_0],
                                name: item.device_name,
                            },
                            unit_amount: item.finalPrice * 100 * 4,
                        },
                        quantity: 1
                    };
                }),
                success_url: `${req.headers.origin}?status=success&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}?status=cancelled`,
            };
            const checkoutSession = yield stripe.checkout.sessions.create(params);
            res.status(200).json(checkoutSession);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    }
    else {
        res.status(500).json({ error: 'no items' });
    }
});
exports.CheckOutController = CheckOutController;
