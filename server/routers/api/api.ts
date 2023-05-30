import express from 'express'
import { ApiNewsController } from '../../controllers/ApiNewsController';

const api = express.Router();

api.get('/news', ApiNewsController)

export default api