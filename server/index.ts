import express from "express";
import dotenv from "dotenv";
import router from "./routers/routes";
import api from "./routers/api/api";
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"

dotenv.config()
const port:number = 3000 || process.env.PORT

const app = express()

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',router)
app.use('/api',api)


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
    console.log(`http://localhost:${port}/`)
})