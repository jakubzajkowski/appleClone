import prisma from "../db/Prisma"
import express from "express"
import validator from "validator"
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken"

interface userTokenType {
    token : string
}

export const LoginController=async (req:express.Request,res:express.Response)=>{
    const {email,password}=req.body
    const user = await prisma.user.findFirst({where: {email: email}})
    if (user){
       const validPassword=await bcrypt.compare(password,user.password) 
       if (validPassword){
            const accessToken =Jwt.sign(user, process.env.TOKEN_SECRET as string, {expiresIn: '1d'})
            const refreshToken =Jwt.sign(user, process.env.REFRESH_TOKEN_SECRET as string, {expiresIn: '30d'})
            const userToken : userTokenType={
                token: refreshToken
            }
            await prisma.user.update({ where: { email: email }, data: userToken})
            res.cookie("access_token", accessToken, {httpOnly: true,maxAge: 60 * 1000 * 60 * 24})
            res.cookie("refresh_token", refreshToken, {httpOnly: true,maxAge: 60 * 1000 * 60 * 24 * 31 })
            res.json({msg:'logged',error:''})
       }
       else{
            res.json({error:'this password is wrong'})
       }
    }
    else{
        res.json({error:'this email is not sign up'})
    }
}