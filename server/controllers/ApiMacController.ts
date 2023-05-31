import prisma from "../db/Prisma"
import express from "express"

export const ApiMacController=async (req:express.Request,res:express.Response)=>{
    const mac= await prisma.mac.findMany();
    try{
        res.json(mac)
    } catch {
        res.status(404).send('404 Not Found Your Api')
    }
}