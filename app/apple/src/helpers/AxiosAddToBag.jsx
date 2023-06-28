import axios from 'axios'

const AxiosAddToBag=(userId,product_category,productId,price)=>{
    axios.post('http://127.0.0.1:3000/add-cart',{
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