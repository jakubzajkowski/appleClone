import prisma from "../db/Prisma"
import express from "express"

export const ApiNewsController=async (req:express.Request,res:express.Response)=>{
    const news= await prisma.news.findMany({orderBy:{createdAt: 'desc'}});
    try{
        res.json(news)
    } catch {
        res.status(404).send('404 Not Found Your Api')
    }
}
