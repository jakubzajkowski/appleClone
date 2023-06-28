import prisma from "../db/Prisma"
import express from "express"

interface cartType {
    userId : string,
    product_category : string,
    productId : string,
    price : number
  }

export const UserCartAddController=async (req:express.Request,res:express.Response)=>{
    const {userId,product_category,productId,price}=req.body
    const cart : cartType={
        userId : userId,
        product_category : product_category,
        productId : productId,
        price: price
    }
    const createCart= await prisma.cart.create({ data: cart})
    res.json({cart: true})
}