import prisma from "../db/Prisma"
import express from "express"
import validator from "validator"
import bcrypt from 'bcrypt'

interface userDataType {
    first_name : string,
    last_name : string,
    country : string,
    birthday :string,
    email: string,
    password : string,
    phone_number : number
  }

export const RegisterController=async (req:express.Request,res:express.Response)=>{
    const {firstName,lastName,country,email,password,confirmPassword,birthday,phoneNumber,acceptOne,acceptTwo}=req.body
    if (validator.isEmpty(firstName) || validator.isEmpty(lastName) || validator.isEmpty(country) || validator.isEmpty(birthday) || validator.isEmpty(email) || validator.isEmpty(password) ||validator.isEmpty(confirmPassword) || validator.isEmpty(acceptOne) || validator.isEmpty(acceptTwo)){
        res.json({error:'You must fill all fields*'})
    }
    else{
        const user = await prisma.user.findFirst({where: {email: email}})
        if (password!==confirmPassword){
            res.json({error:'confirm your password*'})
        }
        else if (user){
            res.json({error:'email is used*'})
        }
        else{
            const hash : string = bcrypt.hashSync(password, 10);
            const userData : userDataType = {
                first_name :firstName,
                last_name : lastName,
                country : country,
                birthday : birthday,
                email: email,
                password : hash,
                phone_number : phoneNumber
            } 
            const createUser = await prisma.user.create({ data: userData})
            res.json({error:'',msg: 'Added'})
        }
    }
}