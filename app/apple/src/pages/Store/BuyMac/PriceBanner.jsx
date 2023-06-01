/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useContext } from 'react'
import { MacPriceContext } from './MacPriceContext'

const Banner=styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgb(245,245,245);
    z-index:1000;
    @media(max-width: 950px){
        padding: 0.8rem;
        background-color: rgb(235,235,235);
    }
`
const BannerContent=styled.div`
    width:50%;
    margin: auto;
    display:flex;
    justify-content: space-between;
    @media(max-width: 950px){
        width:100%;
    }
`
const Delivery=styled.div`
    width: 20%;
`
const Price=styled.div`
    width: 50%;
    @media(max-width: 950px){
        width:100%;
    }
`
const BagButton=styled.button`
    border:none;
    padding: 0.5rem 1rem;
    background-color: rgb(30,144,255);
    color:white;
    border-radius: 0.5rem;
`

const PriceBanner=({price_number,mobile})=>{
    const {memoryModify,storageModify} = useContext(MacPriceContext)
    return <Banner>
        <BannerContent>{mobile.matches ? '' : (
            <Delivery>
                <svg style={{width:'30px',height:'30px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                <h5>Delivery:</h5>
                <p>In Stock Free Shipping</p>
            </Delivery>
            )}
            <Price>
                <h5 className='text-sm-left'>${price_number+storageModify+memoryModify} or ${Math.round(((price_number+storageModify+memoryModify)/12) * 100) / 100}/mo.per month for 12 mo.monthsFootnote*</h5>
                <a href="" className='mx-3'>Get 3% Daily Cash with Apple Card</a>
                <BagButton>Add to Bag</BagButton>
                <svg style={{width:'30px',height:'30px',margin: '0 1rem'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
            </Price>
        </BannerContent>
    </Banner>
}

PriceBanner.propTypes={
    mobile: PropTypes.object,
    price_number: PropTypes.number,
}

export default PriceBanner