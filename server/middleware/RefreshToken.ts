import prisma from "../db/Prisma"
import express from "express"
import Jwt  from "jsonwebtoken"

const RefreshToken=async (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    try {
        const token = req.cookies.access_token
        const refresh_token = req.cookies.refresh_token
        if (token) {
              next()
          }
        else{
            const user = await prisma.user.findFirst({where: {token: refresh_token}})
            if (user){
                const verified = Jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET as string);
                if (verified){
                    const accessToken =Jwt.sign(user, process.env.TOKEN_SECRET as string, {expiresIn: '1d'})
                    res.cookie("access_token", accessToken, {httpOnly: true,maxAge: 10000})
                    next()
                }
                else{
                    throw new Error('Authentication failed!');
                }
            }
            else{
                throw new Error('Authentication failed!');
            }
          }
      } catch (err) {
        res.json({error:'Invalid token'});
      }
};

export default RefreshToken