/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const ShoppingProduct=({device_name,img,price,colors})=>{
    const Mac=styled(motion.div)`
        background-color:white;
        border-radius:1rem;
        margin:1rem;
        width:100%;
        height:500px;
        box-shadow: 0px 0px 25px -10px rgba(66, 68, 90, 1);
        @media (max-width: 950px) {
            height:450px;
        }
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

    return (
        <Mac whileHover={{scale:1.02,boxShadow:'0px 0px 25px -5px rgba(66, 68, 90, 1)'}} transition={{duration:0.5,ease:'easeInOut'}}>
            <div className='text-dark p-4'>
                <h4>{device_name}</h4>
                <img src={img} alt="mac" className='d-block mx-auto w-75 my-4' style={{pointerEvents:'none'}}/>
                <div className='d-flex justify-content-center my-2'>
                    {arrColors.map(color=><ColorDots key={color} color={color}/>)}
                </div>
                <p className='text-dark'>{price}</p>
                <BuyButton>Buy</BuyButton>
            </div>
        </Mac>
    )
}

ShoppingProduct.propTypes={
    device_name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    colors: PropTypes.string
}

export default ShoppingProduct