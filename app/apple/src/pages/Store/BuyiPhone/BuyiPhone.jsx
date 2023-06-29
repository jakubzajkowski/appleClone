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



const BuyiPhone=({mobile})=>{
    const {data,error,isLoading}=useFetchApi('/api/iphone')
    const BuyMacContainer=styled.div`
        margin: 3rem 0 0 0;
        width:100%;
    `
    const text = <h1 style={{color:'black',fontWeight:'bold'}}>Shop iPhone</h1>
    const productsHeader = <><span style={{color:'black'}}>All models.</span> Take your pick.</>
    const shoppingContentHeaderOne =<><span style={{color:'black'}}>Shopping guides.</span> Can’t decide? Start here.</>
    const shoppingContentHeaderTwo =<><span style={{color:'black'}}>Ways to save.</span> Find what works for you.</>
    const shoppingContentHeaderThree =<><span style={{color:'black'}}>Setup and support. </span> Our Specialists are here to help.</>

    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <BuyMacContainer>
            <StoreHeader text={text}/>
            <ShoppingProductsCarousel device='iphone' data={data} isLoading={isLoading} header={productsHeader} bg_color='rgb(247,247,247)'/>
            <ShoppingContentCarousel header={shoppingContentHeaderOne} data={ShopGuidesLists}/>
            <ShoppingContentCarousel header={shoppingContentHeaderTwo} data={ShopSavesLists}/>
            <ShoppingContentCarousel header={shoppingContentHeaderThree} data={ShopSupportsLists}/>
        </BuyMacContainer>
        <Footer mobile={mobile}/>
    </div>
}

BuyiPhone.propTypes={
    mobile: PropTypes.any,
}

export default BuyiPhone