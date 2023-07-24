"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegisterController_1 = require("../controllers/RegisterController");
const LoginController_1 = require("../controllers/LoginController");
const path_1 = __importDefault(require("path"));
const LogOutController_1 = require("../controllers/LogOutController");
const UserCartAddController_1 = require("../controllers/UserCartAddController");
const UserCartDeleteController_1 = require("../controllers/UserCartDeleteController");
const CheckOutController_1 = require("../controllers/CheckOutController");
const router = express_1.default.Router();
const routes = ['/store', '/store/*', '/iphone-14-pro', '/ipad-pro', '/imac', '/mac', '/ipad', '/iphone', '/tv-home', '/register', '/sign-up', '/account', '/bag'];
router.post('/register', RegisterController_1.RegisterController);
router.post('/login', LoginController_1.LoginController);
router.post('/logout', LogOutController_1.LogOutController);
router.post('/add-cart', UserCartAddController_1.UserCartAddController);
router.post('/delete-cart', UserCartDeleteController_1.UserCartDeleteController);
router.post('/checkout', CheckOutController_1.CheckOutController);
router.get(routes, (req, res) => {
    res.sendfile(path_1.default.join(__dirname, "../../public/dist/index.html"));
});
exports.default = router;
