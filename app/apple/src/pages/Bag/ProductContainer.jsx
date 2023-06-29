import { useSelector,useDispatch } from 'react-redux'
import AxiosDeleteFromBag from '../../helpers/AxiosDeleteFromBag'
import {DeleteCart} from '../../Redux/Actions'

function ProductContainer() {
    const cart= useSelector(state=>state.user.cart)
    const dispatch = useDispatch()
    const handelDeleteCart=(product)=>{
        const index =  cart?.indexOf(product)
        dispatch(DeleteCart(index))
        AxiosDeleteFromBag(product.deleteId)
    }
    return (
        <div>
            {cart?.map(product=><div key={product.id}>
                <div className='text-dark my-2 d-md-flex align-items-center'>
                    <div style={{width:'35%'}}>
                        <img style={{width:'100%'}} src={product.img_0} alt="" />
                    </div>
                    <div style={{width:'55%'}}>
                        <h3 className='mx-4 w-100'>{product.device_name}</h3>
                        <p className='mx-4 w-100'>Pay 0% APR for 12 months:</p>
                    </div>
                    <div style={{width:'10%'}}>
                        <h3 className='mx-4 w-100'>${Math.floor(product.finalPrice)}.00</h3>
                        <p className='mx-4 w-100'>${Math.floor((product.finalPrice/12))}/mo.</p>
                        <p className='text-primary mx-4 w-100' style={{cursor:'pointer'}} onClick={()=>handelDeleteCart(product)}>Remove</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='d-flex w-100 justify-content-center align-items-center'>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?wid=400&hei=400&fmt=jpeg&qlt=95&fit=constrain&.v=1527725457537" alt="" />
                        <h5 style={{fontSize:'1rem'}}>Add AppleCare+ for MacBook Air (M1) for $179.00</h5>
                    </div>
                    <p className='text-center'>Get up to three years of technical support and accidental damage protection.</p>
                </div>
                <hr />
                <div className='d-flex w-100 justify-content-center align-items-center'>
                    <h5 style={{fontSize:'1rem'}}>Add gift wrapping and card</h5>
                </div>
                <hr />
                <div className='w-100 align-items-center'>
                    <h5 className='text-center' style={{fontSize:'1rem'}}>Find out how soon you can get this item.</h5>
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <svg style={{width:'25px',fill:'black',cursor:'pointer'}} className='p-1 mb-3 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg><p className='text-center'>In stock and ready to ship.</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default ProductContainer