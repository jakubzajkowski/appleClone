import prisma from "../db/Prisma"
import express from "express"
import Jwt  from "jsonwebtoken"

export interface UserRequest extends express.Request {
    userId: any
}

const Auth=async (req:UserRequest,res:express.Response,next:express.NextFunction)=>{
    try {
        const token = req.cookies.access_token
        if (!token) {
              throw new Error('Authentication failed!');
          }
        const verified = Jwt.verify(token, process.env.TOKEN_SECRET as string);
        req.userId = verified;  
        next();
      } catch (err) {
        res.json({error:'Invalid token'});
      }
};

export default Auth