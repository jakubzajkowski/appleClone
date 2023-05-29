import express from 'express'


const api = express.Router();

api.get('/api', function(req, res){
    res.json({api:'true'})
})

export default api