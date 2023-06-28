import { useSelector } from 'react-redux'

function ProductContainer() {
    const cart= useSelector(state=>state.user.cart)
    return (
        <div>
            {cart.map(product=><div key={product.id} className='text-white my-2 d-flex align-items-center'>
                <img style={{width:'15%'}} src={product.img_1} alt="" />
                <p className='mx-4'>{product.device_name}</p>
            </div>)}
        </div>
    )
}
export default ProductContainer