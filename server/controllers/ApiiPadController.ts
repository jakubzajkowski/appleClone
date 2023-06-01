import prisma from "../db/Prisma"
import express from "express"

export const ApiiPadController=async (req:express.Request,res:express.Response)=>{
    const ipad = await prisma.ipad.findMany();
    try{
        res.json(ipad)
    } catch {
        res.status(404).send('404 Not Found Your Api')
    }
}