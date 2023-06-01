/* eslint-disable no-unused-vars */
import Memory from './Memory';
import Storage from './Storage';
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import styled from 'styled-components'
import useFetchApi from "../../../hooks/useFetchApi"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import PriceBanner from './PriceBanner';
import { MacPriceContext } from './MacPriceContext';

const Castomize=styled.div`
    width: 50%;
    margin: auto;
    display:flex;
    justify-content:space-between;
    @media(max-width: 950px){
        width: 100%;
        padding:1rem;
    }
`
const ColorDots=styled.div`
        border-radius: 3rem;
        width: 22px;
        height: 22px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
    `

const BuyCastomizeMac=({mobile})=>{
    const { name } = useParams();
    const {data,error,isLoading}=useFetchApi(`/api/mac/${name}`)
    const arrColors = data?.colors.split(',')
    const [storageModify,setStorageModify] = useState(0)
    const [memoryModify,setMemoryModify] = useState(0)


    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'white',margin:'0 0 10% 0'}}>
        <Nav mobile={mobile}/>
        <MacPriceContext.Provider value={{storageModify,setMemoryModify,setStorageModify,memoryModify}}>
        {isLoading ? (<CircularProgress/>) : (<Castomize>
            <Row className='w-100 my-3'>
                <Col lg="6">
                    <img src={data?.img_0} alt="mac" className={mobile.matches ? 'w-100 dispay-block mx-auto' : 'w-100 sticky-top p-4'} />
                </Col>
                <Col lg="6">
                    <div className='info mt-5'>
                        <h2>Castomize Your {data?.device_name}</h2>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.chip} with {data?.core_cpu}, {data?.core_gpu}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.ram}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.storage}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.display}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.camera}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.battery}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.weight}</p>
                    </div>
                    <hr />
                    <h6>Apple Trade In</h6>
                    <p style={{fontSize:'0.9rem'}}>Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.Footnote◊◊</p>
                    <a style={{fontSize:'0.9rem'}} href="">How does trade in work?</a>
                    <hr />
                    <form className='my-4'>
                        <div className='select_color d-flex align-items-center'>
                            <h5>Select Color</h5>
                            {arrColors?.map(color=><ColorDots key={color} color={color}/>)}
                        </div>
                        <hr />
                        <div className='select_memory'>
                            <h5>Memory</h5>
                            <Memory memory={parseInt(data?.ram.slice(6,8))} price={data?.price_number}/>
                        </div>
                        <div className='select_memory'>
                            <h5>Storage</h5>
                            <Storage storage={data?.storage.slice(0,3)} price={data?.price_number}/>
                        </div>
                    </form>
                </Col>
            </Row>
        </Castomize>)}
        <PriceBanner price_number={data?.price_number} mobile={mobile}/>
        </MacPriceContext.Provider>
        <Footer mobile={mobile}/>
    </div>
}

BuyCastomizeMac.propTypes={
    mobile: PropTypes.any,
}

export default BuyCastomizeMac