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
import GalleryModal from './GalleryModal';

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
    const [storageModify,setStorageModify] = useState({price:0,storage:''})
    const [memoryModify,setMemoryModify] = useState({price:0,memory:''})
    const [pickColor,setPickColor]=useState(null)
    const [gallery,setGallery]=useState(false)


    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'white',margin:'0 0 10% 0'}}>
        <Nav mobile={mobile}/>
        {gallery ? <GalleryModal setGallery={setGallery} img={[data?.img_0,data?.img_1,data?.img_2]}/> : ''}
        <MacPriceContext.Provider value={{storageModify,setMemoryModify,setStorageModify,memoryModify}}>
        {isLoading ? (<CircularProgress/>) : (<Castomize>
            <Row className='w-100 my-3'>
                <Col lg="6">
                    <div className={mobile.matches ? '' : 'w-100 sticky-top p-4'}>
                        <img src={data?.img_0} alt="mac" className='w-100 dispay-block mx-auto' />
                        <p onClick={()=>setGallery(gallery=>!gallery)} className='text-primary text-center' style={{cursor:'pointer'}}>View Gallery</p>
                        <div className='w-100 d-flex justify-content-between my-5'>
                            <div className='w-50'>
                                <svg className='d-block mx-auto' style={{width:'30px',height:'30px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"/></svg>
                                <p className='text-center my-2' style={{fontSize:'0.8rem'}}>Get free delivery, or pick up available items at an Apple Store</p>
                            </div>
                            <div className='w-50'>
                                <svg className='d-block mx-auto' style={{width:'30px',height:'30px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>
                                <p className='text-center my-2' style={{fontSize:'0.8rem'}}>Free and easy returns</p>
                            </div>
                        </div>
                        <hr />
                        <svg className='mx-auto d-block' style={{width:'30px',height:'30px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
                        <p className='text-center' style={{fontSize:'0.8rem'}}>Have questions about buying a Mac?</p>
                        <p className='text-center' style={{fontSize:'0.8rem'}}><a href="">Chat with a Mac Specialist</a></p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className='info mt-5'>
                        <h2>Castomize Your {data?.device_name}</h2>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{data?.chip} with {data?.core_cpu}, {data?.core_gpu}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{(memoryModify.memory!='') ? memoryModify.memory : data?.ram}</p>
                        <p style={{lineHeight: '20px',marginBottom: '10px',fontSize:'0.9rem'}}>{(storageModify.storage!='') ? storageModify.storage : data?.storage}</p>
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
                            {arrColors?.map(color=><ColorDots onClick={()=>setPickColor(color)} style={{transform: (pickColor==color) ? 'scale(1.8)' : 'scale(1)'}} key={color} color={color}/>)}
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
                        <div className='in-box'>
                            <h5>What’s in the Box</h5>
                            <img className='w-100' src="https://innergo.store/pol_pl_MacBook-Pro-13-3-M2-8-rdzeni-CPU-10-rdzeni-GPU-8GB-RAM-256GB-SSD-Srebrny-32383_4.webp" alt="" />
                        </div>
                    </form>
                </Col>
            </Row>
        </Castomize>)}
        <PriceBanner price_number={data?.price_number} mobile={mobile} id={data?.id}/>
        </MacPriceContext.Provider>
        <Footer mobile={mobile}/>
    </div>
}

BuyCastomizeMac.propTypes={
    mobile: PropTypes.any,
}

export default BuyCastomizeMac