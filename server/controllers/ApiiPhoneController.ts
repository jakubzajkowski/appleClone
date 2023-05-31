import prisma from "../db/Prisma"
import express from "express"

export const ApiiPhoneController=async (req:express.Request,res:express.Response)=>{
    const iphone= await prisma.iphone.findMany();
    try{
        res.json(iphone)
    } catch {
        res.status(404).send('404 Not Found Your Api')
    }
}