import express from 'express'
import { ApiNewsController } from '../../controllers/ApiNewsController';
import { ApiMacController } from '../../controllers/ApiMacController';
import { ApiiPhoneController } from '../../controllers/ApiiPhoneController';
import { ApiiPadController } from '../../controllers/ApiiPadController';

const api = express.Router();

api.get('/news', ApiNewsController)
api.get('/mac', ApiMacController)
api.get('/iphone', ApiiPhoneController)
api.get('/ipad', ApiiPadController)

export default api