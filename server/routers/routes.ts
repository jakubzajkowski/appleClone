import express from 'express'
import { RegisterController } from '../controllers/RegisterController';
import { LoginController } from '../controllers/LoginController';
import path from 'path';
import { LogOutController } from '../controllers/LogOutController';
import { UserCartAddController } from '../controllers/UserCartAddController';

const router = express.Router();
const routes : string[] = ['/store','/store/*','/iphone-14-pro','/ipad-pro','/imac','/mac','/ipad','/iphone','/tv-home','/register','/sign-up','/account']
router.post('/register', RegisterController)
router.post('/login', LoginController)
router.post('/logout', LogOutController)
router.post('/add-cart', UserCartAddController)
router.get(routes, (req, res) => {
    res.sendfile(path.join(__dirname, "../../public/dist/index.html"))
  });

export default router