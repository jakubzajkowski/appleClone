import prisma from "../db/Prisma"
import express from "express"

export const UserCartDeleteController=async (req:express.Request,res:express.Response)=>{
    const {deleteId}=req.body
    if (deleteId){
        const deleteUser = await prisma.cart.delete({
            where: {
              id: deleteId,
            },
          })
        res.json({deleted : true})
    }
    else{
        res.status(401)
    }
}