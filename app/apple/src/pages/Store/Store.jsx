import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styled from 'styled-components'
import StoreHeader from './Usable/ShoppingHeader';
import StoreProductsCarousel from './StoreProductsCarousel';
import StoreNewsCarousel from './StoreNewsCarousel';
import StoreInfoCarousel from './StoreInfoCarousel';
import ShoppingContentCarousel from './ShoppingContentCarousel';
import { HelpList } from './HelpLists';

const Store=({mobile})=>{

    const StoreContainer=styled.div`
        margin: 3rem 0 0 0;
        width:100%;
    `
    const text = <h1 style={{color:'rgb(90,90,90)',fontWeight:'bold'}}><span style={{color:'black'}}>Store.</span> The best way to buy the products you love.</h1>
    const shoppingContentHeader =<><span style={{color:'black'}}>Help is here.</span> Whenever and however you need it.</>
    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <StoreContainer>
            <StoreHeader text={text}/>
            <StoreProductsCarousel />
            <StoreNewsCarousel />
            <ShoppingContentCarousel header={shoppingContentHeader} data={HelpList}/>
            <StoreInfoCarousel />
        </StoreContainer>
        <Footer mobile={mobile}/>
    </div>
}

Store.propTypes={
    mobile: PropTypes.any,
}

export default Store