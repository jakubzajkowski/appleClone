import express from 'express'
import { ApiNewsController } from '../../controllers/ApiNewsController';
import { ApiMacController,ApiMacNameController } from '../../controllers/ApiMacController';
import { ApiiPhoneController,ApiiPhoneNameController } from '../../controllers/ApiiPhoneController';
import { ApiiPadController,ApiiPadNameController} from '../../controllers/ApiiPadController';
import { UserController } from '../../controllers/UserController';
import Auth  from '../../middleware/Auth';
import RefreshToken from '../../middleware/RefreshToken';
import { UserCartController } from '../../controllers/UserCartController';

const api = express.Router();

api.get('/news', ApiNewsController)
api.get('/mac', ApiMacController)
api.get('/mac/:name', ApiMacNameController)
api.get('/ipad/:name', ApiiPadNameController)
api.get('/iphone', ApiiPhoneController)
api.get('/iphone/:name', ApiiPhoneNameController)
api.get('/ipad', ApiiPadController)
api.get('/users',RefreshToken, Auth,UserController)
api.get('/cart/:id', UserCartController)

export default api