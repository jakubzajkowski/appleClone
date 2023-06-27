import prisma from "../db/Prisma"
import express from "express"

interface cartType {
    userId : string,
    product_category : string,
    productId : string,
  }

export const UserCartAddController=async (req:express.Request,res:express.Response)=>{
    const {userId,product_category,productId}=req.body
    const cart : cartType={
        userId : userId,
        product_category : product_category,
        productId : productId,
    }
    const createCart= await prisma.cart.create({ data: cart})
    res.json({cart: true})
}