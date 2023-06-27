import prisma from "../db/Prisma"
import express from "express"

export const UserCartController=async (req:express.Request,res:express.Response)=>{
    if (req.params.id && typeof req.params.id === "string"){
    const query: string=req.params.id
    const userCart= await prisma.cart.findMany({where: {userId: query}});
    const products = await Promise.all(userCart.map(async (product) => {
        if (product.product_category=='ipad'){
            return await prisma.ipad.findFirst({where: {id: product.productId}});
        }
        else if (product.product_category=='mac'){
            return await prisma.mac.findFirst({where: {id: product.productId}});
        }
        else {
            return await prisma.iphone.findFirst({where: {id: product.productId}});
        }
        })
    )
    console.log(products)
    }
}