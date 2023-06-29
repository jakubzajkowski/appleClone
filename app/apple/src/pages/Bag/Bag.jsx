import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import ProductContainer from './ProductContainer'

export const CheckOutBtn=styled.button`
border:none;
padding: 0.8rem 1rem;
background-color: rgb(30,144,255);
color:white;
border-radius: 1rem;
`

const Bag=({mobile})=>{
    const userData= useSelector(state=>state.user.data)
    const isLogged= useSelector(state=>state.user.logged)
    const isLoading= useSelector(state=>state.user.isLoading)
    const cart= useSelector(state=>state.user.cart)
    const finalPrice=()=>{
        let price = 0
        cart?.map(prod=>price+=prod.finalPrice)
        return price
    }
    if (isLogged) return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(255,255,255)'}}>
        <Nav mobile={mobile}/>
        <div className={mobile.matches ? 'w-100 p-1 mx-auto' : 'w-50 mx-auto p-2'}>
            <h2>Review your bag.</h2>
            <p>Free delivery and free returns.</p>
            <div className='p-3 w-100 d-flex rounded text-center'style={{backgroundColor:'rgb(245,245,245)',fontSize:'0.9rem'}}>
                <img style={{width:'30px',height:'30px'}} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=82&hei=82&fmt=jpeg&qlt=95&.v=1572631318807" alt="" />
                <p>Items not purchased with a one time payment may be eligible for $191.50/mo.per month at 0% APRfootnote◊ when you check out with Apple Card Monthly Installments.</p>
            </div>
            {
                (cart?.length==0) ? 
                <h1 style={{color:'white'}} className='mx-2 mb-4'>Your Bag is empty.</h1> 
                :
                <ProductContainer/>
            }
            <hr />
            <div className='w-100 mx-auto p-3 text-dark justify-content-between d-flex align-items-center'>
                <div>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Estimated tax for:</p>
                </div>
                <div>
                    <p>${Math.floor(finalPrice())}.00</p>
                    <p>FREE</p>
                    <p>$ –</p>
                </div>
            </div>
            <hr />
            <div className='w-100 mx-auto p-5 text-dark justify-content-between d-flex align-items-center'>
                <h3>Total</h3>
                <h3>${Math.floor(finalPrice())}.00</h3>
            </div>
            <div className={mobile.matches ? 'w-75 my-3 mx-auto rounded p-5 text-center'  : 'w-50 my-3 mx-auto rounded p-5 text-center'} style={{backgroundColor:'rgb(245,245,245)'}}>
                <h3>Pay in Full</h3>
                <h3>${Math.floor(finalPrice())}.00</h3>
                <CheckOutBtn className='w-75 mx-auto'>Check Out</CheckOutBtn>
            </div>
        </div>
        <Footer mobile={mobile} />
        </div>
    )
    if (isLoading) return (
        <div>Loading...</div>
    )
    else return (
        <div>Not logged</div>
    )
}

Bag.propTypes={
    mobile: PropTypes.object
}

export default Bag