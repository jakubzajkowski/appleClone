import express from 'express'
import { RegisterController } from '../controllers/RegisterController';
import { LoginController } from '../controllers/LoginController';
import path from 'path';

const router = express.Router();
const routes : string[] = ['/store','/store/*','/iphone-14-pro','/ipad-pro','/imac','/mac','/ipad','/iphone','/tv-home','/register','/sign-up']
router.post('/register', RegisterController)
router.post('/login', LoginController)
router.get(routes, (req, res) => {
    res.sendfile(path.join(__dirname, "../../public/index.html"));
  });

export default router