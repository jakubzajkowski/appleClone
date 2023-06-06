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
export const ApiiPadNameController=async (req:express.Request,res:express.Response)=>{
    if (req.params.name && typeof req.params.name === "string"){
        const query: string=req.params.name
        const condition:string = query.replace(/-/gi, " ");
        const ipad= await prisma.ipad.findFirst({where: {device_name: condition}})
        try{
            res.json(ipad)
        } catch {
            res.status(404).send('404 Not Found Your Api')
        }
    }
    else{
        res.send('Error of param')
    }
}