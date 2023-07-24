import {variants} from './MobileVariantsAnimate'
import styled from 'styled-components'
import { motion} from 'framer-motion';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import ProductContainer from './Bag/ProductsContainer';

const MobileBagContainer=({setIsOpenBag,isOpenBag})=>{
    const cart= useSelector(state=>state.user.cart)
    const isLogged= useSelector(state=>state.user.logged)
    const Menu=styled(motion.div)`
    position:fixed;
    height:100vh;
    z-index:1000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgb(20,20,20);
`
const BagMenu=styled.div`
margin: 1rem 0 0 0;
padding:1rem;
align-items:center;
`
const BagOptions = styled(motion.ul)`
    margin: 1rem 0 0 0;
    padding:1rem;
`
const BagOption = styled(motion.li)`
list-style:none;
margin: 1rem 0 0 0;
font-size:1rem;
color:white;
font-weight:bold;
`

    if (!isLogged) return (
    <Menu key='search' variants={variants} initial={{visibility:'hidden'}} animate='open' exit='close' transition={{ease:'easeInOut',duration:0.5}}>
        <svg onClick={()=>setIsOpenBag(!isOpenBag)} xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,right:0,width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 m-3' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <BagMenu>
            <BagOptions>
                <h1 style={{color:'white'}} className='mx-2 mb-4'>Your Bag is empty.</h1>
                <h3 style={{color:'rgb(160,160,160)',fontSize:'1rem'}} className='mx-2 mb-5'><span className='text-decoration-underline text-primary'>Sign in</span> to see if you have any saved items</h3>
                <h3 style={{color:'grey',fontSize:'1rem'}} className='mx-2'>My Profile</h3>
                <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>Orders</BagOption>
                <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>Your Saves</BagOption>
                <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>Account</BagOption>
                <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>Sign in</BagOption>
            </BagOptions>
        </BagMenu>
    </Menu>  
    )
    else {
        return (
            <Menu key='search' variants={variants} initial={{visibility:'hidden'}} animate='open' exit='close' transition={{ease:'easeInOut',duration:0.5}}>
                <svg onClick={()=>setIsOpenBag(!isOpenBag)} xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,right:0,width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 m-3' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <BagMenu>
                    <BagOptions>
                        {(cart.length!=0) ? <a href='/bag' style={{textDecoration:'none'}}><ProductContainer/></a> : <h1 style={{color:'white'}} className='mx-2 mb-4'>Your Bag is empty.</h1>}
                        <h3 style={{color:'grey',fontSize:'1rem'}} className='mx-2'>My Profile</h3>
                        <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>Orders</BagOption>
                        <BagOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>Your Saves</BagOption>
                        <BagOption><a href="/account" style={{textDecoration:'none',color:'white'}}><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>Account</a></BagOption>
                    </BagOptions>
                </BagMenu>
            </Menu>  
        )
    }
}




MobileBagContainer.propTypes = {
    setIsOpenBag: PropTypes.any,
    isOpenBag: PropTypes.bool
  };
  



export default MobileBagContainer