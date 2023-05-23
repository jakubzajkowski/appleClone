import express from "express";
import dotenv from "dotenv";
dotenv.config()
const port = 3000 || process.env.PORT

const app = express()


app.listen(port,(err)=>{
    if (err) throw err
    console.log(`Server is listening on port ${port}`)
    console.log(`http://localhost:${port}/`)
})