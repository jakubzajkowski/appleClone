/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import styled from 'styled-components'
import StoreHeader from '../Usable/ShoppingHeader';
import ShoppingProductsCarousel from '../Usable/ShoppingProductsCarousel';
import useFetchApi from "../../../hooks/useFetchApi"


const BuyMac=({mobile})=>{
    const {data,error,isLoading}=useFetchApi('/api/mac')
    const BuyMacContainer=styled.div`
        margin: 3rem 0 0 0;
        width:100%;
    `
    const text = <h1 style={{color:'black',fontWeight:'bold'}}>Shop Mac</h1>
    const productsHeader = <><span style={{color:'black'}}>All models.</span> Take your pick.</>

    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <BuyMacContainer>
            <StoreHeader text={text}/>
            <ShoppingProductsCarousel data={data} isLoading={isLoading} header={productsHeader}/>
        </BuyMacContainer>
        <Footer mobile={mobile}/>
    </div>
}

BuyMac.propTypes={
    mobile: PropTypes.any,
}

export default BuyMac