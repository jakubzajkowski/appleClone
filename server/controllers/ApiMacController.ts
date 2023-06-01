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
export const ApiMacNameController=async (req:express.Request,res:express.Response)=>{
    if (req.params.name && typeof req.params.name === "string"){
        const query: string=req.params.name
        const condition:string = query.replace(/-/gi, " ");
        const mac= await prisma.mac.findFirst({where: {device_name: condition}})
        try{
            res.json(mac)
        } catch {
            res.status(404).send('404 Not Found Your Api')
        }
    }
    else{
        res.send('Error of param')
    }
}