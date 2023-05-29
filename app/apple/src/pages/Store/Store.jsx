import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styled from 'styled-components'
import StoreHeader from './StoreHeader';
import StoreProductsCarousel from './StoreProductsCarousel';
import StoreNewsCarousel from './StoreNewsCarousel';
import StoreInfoCarousel from './StoreInfoCarousel';

const Store=({mobile})=>{

    const StoreContainer=styled.div`
        margin: 3rem 0 0 0;
        width:100%;
    `

    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <StoreContainer>
            <StoreHeader />
            <StoreProductsCarousel/>
            <StoreNewsCarousel/>
            <StoreInfoCarousel />
        </StoreContainer>
        <Footer mobile={mobile}/>
    </div>
}

Store.propTypes={
    mobile: PropTypes.any,
}

export default Store