import express from 'express'
import { ApiNewsController } from '../../controllers/ApiNewsController';
import { ApiMacController,ApiMacNameController } from '../../controllers/ApiMacController';
import { ApiiPhoneController,ApiiPhoneNameController } from '../../controllers/ApiiPhoneController';
import { ApiiPadController,ApiiPadNameController} from '../../controllers/ApiiPadController';

const api = express.Router();

api.get('/news', ApiNewsController)
api.get('/mac', ApiMacController)
api.get('/mac/:name', ApiMacNameController)
api.get('/ipad/:name', ApiiPadNameController)
api.get('/iphone', ApiiPhoneController)
api.get('/iphone/:name', ApiiPhoneNameController)
api.get('/ipad', ApiiPadController)

export default api