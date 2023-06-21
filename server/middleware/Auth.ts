import prisma from "../db/Prisma"
import express from "express"
import Jwt  from "jsonwebtoken"

interface UserRequest extends express.Request {
    userId: any
}
interface JwtPayload {
  _id: string
}

const Auth=async (req:UserRequest,res:express.Response,next:express.NextFunction)=>{
    try {
        const token = req.cookies.access_token;
        if (!token) {
          throw new Error('Authentication failed!');
        }
        const verified = Jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload
        req.userId = verified._id;  
        next();
      } catch (err) {
        res.status(400).send('Invalid token !');
      }
};

export default Auth