import prisma from "../db/Prisma"
import express from "express"

export const UserCartController=async (req:express.Request,res:express.Response)=>{
    if (req.params.id && typeof req.params.id === "string"){
    const query: string=req.params.id
    const userCart= await prisma.cart.findMany({where: {userId: query}});
    if (userCart){
        const products = await Promise.all(userCart.map(async (product) => {
            if (product.product_category=='ipad'){
                const productInfo : any= await prisma.ipad.findFirst({where: {id: product.productId}})
                return {...productInfo,finalPrice: product.price,deleteId:product.id}
            }
            else if (product.product_category=='mac'){
                const productInfo : any = await prisma.mac.findFirst({where: {id: product.productId}})
                return {...productInfo,finalPrice: product.price,deleteId:product.id}
            }
            else {
                const productInfo : any = await prisma.iphone.findFirst({where: {id: product.productId}})
                return {...productInfo,finalPrice: product.price,deleteId:product.id}
            }
            })
        )
        res.json(products)
    }
    else{
        res.status(401)
    }
    }
}