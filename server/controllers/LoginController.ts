import prisma from "../db/Prisma"
import express from "express"
import validator from "validator"
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken"

interface userToken {
    token : string
}

export const LoginController=async (req:express.Request,res:express.Response)=>{
    const {email,password}=req.body
    const user = await prisma.user.findFirst({where: {email: email}})
    if (user){
       const validPassword=await bcrypt.compare(password,user.password) 
       if (validPassword){
            const accessToken =Jwt.sign(user, process.env.TOKEN_SECRET as string, {expiresIn: '30d'})
            const refreshToken =Jwt.sign(user, process.env.REFRESH_TOKEN_SECRET as string, {expiresIn: '30d'})
            const userToken : userToken ={
                token: refreshToken
            }
            if (user.token='token'){
                const updateUser = await prisma.user.update({where: {email: user.email},data: userToken,})
            }
            res.cookie("access_token", accessToken, {httpOnly: true,maxAge: 216000})
            res.json({msg:'logged'})
       }
       else{
            res.json({error:'this password is wrong'})
       }
    }
    else{
        res.json({error:'this email is not sign up'})
    }
}