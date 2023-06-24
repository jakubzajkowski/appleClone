import express from "express";
import dotenv from "dotenv";
import router from "./routers/routes";
import api from "./routers/api/api";
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import path = require("path");

dotenv.config()
const port:number = 3000 || process.env.PORT

const app = express()
app.use(cors({
	origin: 'http://localhost:5173',
	methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(express.static(path.join(__dirname, "../public/dist")));
app.use('/',router)
app.use('/api',api)


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
    console.log(`http://localhost:${port}/`)
})