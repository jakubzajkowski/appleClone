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
export const ApiiPhoneNameController=async (req:express.Request,res:express.Response)=>{
    if (req.params.name && typeof req.params.name === "string"){
        const query: string=req.params.name
        const condition:string = query.replace(/-/gi, " ");
        const iphone= await prisma.iphone.findFirst({where: {device_name: condition}})
        try{
            res.json(iphone)
        } catch {
            res.status(404).send('404 Not Found Your Api')
        }
    }
    else{
        res.send('Error of param')
    }
}