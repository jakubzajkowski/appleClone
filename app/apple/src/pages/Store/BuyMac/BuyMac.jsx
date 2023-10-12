/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import styled from 'styled-components'
import StoreHeader from '../Usable/ShoppingHeader';
import ShoppingProductsCarousel from '../Usable/ShoppingProductsCarousel';
import useFetchApi from "../../../hooks/useFetchApi"
import ShoppingContentCarousel from '../Usable/ShoppingContentCarousel';
import { ShopGuidesLists } from '../ShopGuidesLists';
import { ShopSavesLists } from '../shopSavesLists';
import { ShopSupportsLists } from '../ShopSupportLists';
import {useContext} from "react";
import {MobileContext} from "../../../context.jsx";


const BuyMac=()=>{
    const mobile = useContext(MobileContext)
    const {data,error,isLoading}=useFetchApi('/api/mac')
    const BuyMacContainer=styled.div`
        margin: 3rem 0 0 0;
        width:100%;
    `
    const text = <h1 style={{color:'black',fontWeight:'bold'}}>Shop Mac</h1>
    const productsHeader = <><span style={{color:'black'}}>All models.</span> Take your pick.</>
    const shoppingContentHeaderOne =<><span style={{color:'black'}}>Shopping guides.</span> Can’t decide? Start here.</>
    const shoppingContentHeaderTwo =<><span style={{color:'black'}}>Ways to save.</span> Find what works for you.</>
    const shoppingContentHeaderThree =<><span style={{color:'black'}}>Setup and support. </span> Our Specialists are here to help.</>

    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <BuyMacContainer>
            <StoreHeader text={text}/>
            <ShoppingProductsCarousel device='mac' data={data} isLoading={isLoading} header={productsHeader} bg_color='white'/>
            <ShoppingContentCarousel header={shoppingContentHeaderOne} data={ShopGuidesLists}/>
            <ShoppingContentCarousel header={shoppingContentHeaderTwo} data={ShopSavesLists}/>
            <ShoppingContentCarousel header={shoppingContentHeaderThree} data={ShopSupportsLists}/>
        </BuyMacContainer>
        <Footer mobile={mobile}/>
    </div>
}

BuyMac.propTypes={
    mobile: PropTypes.any,
}

export default BuyMac