import express from 'express'
import { RegisterController } from '../controllers/RegisterController';

const router = express.Router();

router.get('/', function(req, res){
    res.send('Hello world')
})
router.post('/register', RegisterController)

export default router