import prisma from "../db/Prisma"
import express from "express"
import validator from "validator"
import bcrypt from 'bcrypt'

interface UserRequest extends express.Request {
    userId: any
}
interface User {
    first_name: string | undefined,
    last_anme: string | undefined,
    country: string | undefined,
    birthday:string | undefined,
    email:string | undefined,
    phone_number: string | undefined
}

export const UserController=async (req:UserRequest,res:express.Response)=>{
    const user = await prisma.user.findFirst({where: {id: req.userId}})
    const User:User={
        first_name: user?.first_name,
        last_anme: user?.last_name,
        country: user?.country,
        birthday:user?.birthday,
        email:user?.email,
        phone_number: user?.phone_number
    }
    res.json({user:User})
}