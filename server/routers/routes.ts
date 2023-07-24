import express from 'express'
import { RegisterController } from '../controllers/RegisterController';
import { LoginController } from '../controllers/LoginController';
import path from 'path';
import { LogOutController } from '../controllers/LogOutController';
import { UserCartAddController } from '../controllers/UserCartAddController';
import { UserCartDeleteController } from '../controllers/UserCartDeleteController';
import { CheckOutController } from '../controllers/CheckOutController';

const router = express.Router();
const routes : string[] = ['/store','/store/*','/iphone-14-pro','/ipad-pro','/imac','/mac','/ipad','/iphone','/tv-home','/register','/sign-up','/account','/bag']
router.post('/register', RegisterController)
router.post('/login', LoginController)
router.post('/logout', LogOutController)
router.post('/add-cart', UserCartAddController)
router.post('/delete-cart', UserCartDeleteController)
router.post('/checkout', CheckOutController)
router.get(routes, (req, res) => {
    res.sendfile(path.join(__dirname, "../../public/dist/index.html"))
  });

export default router