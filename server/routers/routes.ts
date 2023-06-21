import express from 'express'
import { RegisterController } from '../controllers/RegisterController';
import { LoginController } from '../controllers/LoginController';

const router = express.Router();

router.get('/', function(req, res){
    res.send('Hello world')
})
router.post('/register', RegisterController)
router.post('/login', LoginController)

export default router