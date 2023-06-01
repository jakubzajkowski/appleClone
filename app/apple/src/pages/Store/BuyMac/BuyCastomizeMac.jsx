/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import styled from 'styled-components'
import useFetchApi from "../../../hooks/useFetchApi"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';


const BuyCastomizeMac=({mobile})=>{
    const { name } = useParams();
    const {data,error,isLoading}=useFetchApi(`/api/mac/${name}`)
    console.log(data)
    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <Container className='w-50'>
            xd
        </Container>
        <Footer mobile={mobile}/>
    </div>
}

BuyCastomizeMac.propTypes={
    mobile: PropTypes.any,
}

export default BuyCastomizeMac