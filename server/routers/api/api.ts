import express from 'express'
import { ApiNewsController } from '../../controllers/ApiNewsController';
import { ApiMacController } from '../../controllers/ApiMacController';

const api = express.Router();

api.get('/news', ApiNewsController)
api.get('/mac', ApiMacController)

export default api