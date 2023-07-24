import axios from 'axios'

const AxiosAddToBag=(userId,product_category,productId,price)=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/add-cart`,{
        userId:userId,
        product_category: product_category,
        productId:productId,
        price: price
    }, ).then(({data})=>{
       console.log(data)
       console.log(userId,product_category,productId,price)
    })
}

export default AxiosAddToBag