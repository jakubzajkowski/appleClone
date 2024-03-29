/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const ShoppingProduct=({device_name,img,price,colors,bg_color,device})=>{
    const Box=styled(motion.div)`
        background-color:${bg_color};
        border-radius:1rem;
        margin:1rem;
        width:100%;
        box-shadow: 0px 0px 25px -10px rgba(66, 68, 90, 1);
    `
    const BuyButton=styled.button`
        border:none;
        padding: 0.5rem 1rem;
        background-color: rgb(30,144,255);
        color:white;
        border-radius: 3rem;
    `
    const ColorDots=styled.div`
        border-radius: 3rem;
        width: 12px;
        height: 12px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0.2rem;
    `
    const arrColors = colors.split(',')
    const arrName = device_name.split('')
    const query = device_name.replace(/\s+/g,"-");
    return (
        <Box whileHover={{scale:1.02,boxShadow:'0px 0px 25px -5px rgba(66, 68, 90, 1)'}} transition={{duration:0.5,ease:'easeInOut'}}>
            <div className='text-dark p-4'>
                <h4>{device_name}</h4>
                <img src={img} alt="mac" className={(arrName[0]=='i') ? 'w-100 d-block mx-auto my-4' : 'w-50 d-block mx-auto my-4'} style={{pointerEvents:'none'}}/>
                <div className='d-flex justify-content-center my-2'>
                    {arrColors.map(color=><ColorDots key={color} color={color}/>)}
                </div>
                <p className='text-dark'>{price}</p>
                <BuyButton><a className='text-decoration-none text-light' href={`/store/buy-${device}/${query}`}>Buy</a></BuyButton>
            </div>
        </Box>
    )
}

ShoppingProduct.propTypes={
    device_name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    colors: PropTypes.string,
    device: PropTypes.string,
    bg_color: PropTypes.string
}

export default ShoppingProduct