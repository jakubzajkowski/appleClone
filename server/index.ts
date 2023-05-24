import express from "express";
import dotenv from "dotenv";
dotenv.config()
const port:number = 3000 || process.env.PORT

const app = express()


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
    console.log(`http://localhost:${port}/`)
})