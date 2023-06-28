/* eslint-disable no-unused-vars */
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
import { motion } from 'framer-motion';
import {wrap} from '@popmotion/popcorn'
import Display from './Display';
import Storage from './Storage';
import Price from './Price';
import { iPhonePriceContex } from './iPhonePriceContex';
import { useSelector } from 'react-redux';
import AxiosAddToBag from '../../../helpers/AxiosAddToBag';

const Castomize=styled.div`
    width: 100%;
    margin: auto;
    display:flex;
    justify-content:space-between;
    @media(max-width: 950px){
        width: 100%;
        padding:1rem;
    }
`
const CartButton=styled.button`
border:none;
padding: 0.5rem 1rem;
background-color: rgb(30,144,255);
color:white;
border-radius: 3rem;
`
const ColorDots=styled.div`
        border-radius: 3rem;
        width: 30px;
        height: 30px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
    `
    const PaginationDots=styled.div`
    border-radius: 3rem;
    width: 10px;
    height: 10px;
    background-color:rgb(150,150,150);
    transform:${props=>props.active ? 'scale(1.3)' : 'scale(1)'};
    margin: 0 0.5rem 0.5rem 0.5rem;
    cursor: pointer;
`

const BuyCastomizeiPhone=({mobile})=>{
    const userData= useSelector(state=>state.user.data)
    const isLogged= useSelector(state=>state.user.logged)
    const { name } = useParams();
    const {data,error,isLoading}=useFetchApi(`/api/iphone/${name}`)
    const arrColors = data?.colors.split(',')
    const [storageModify,setStorageModify] = useState({price:0,storage:''})
    const [displayModify,setDisplayModify] = useState({price:0,memory:''})
    const [pickColor,setPickColor]=useState(null)
    const [[slide,direction],setSlide]=useState([0,0])
    const slideIndex=wrap(0,[data?.img_0,data?.img_1,data?.img_2].length,slide)

    const paginate=(newDir)=>{
        setSlide([slide+newDir,newDir])
        console.log(slide,direction,slideIndex)
    }
    const variants={
        left:{
            opacity:1,
            x:['100%','0%']
        },
        right:{
            opacity:1,
            x:['-100%','0%']
        }
    }


    return <div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'white',margin:'0 0 10% 0'}}>
        <Nav mobile={mobile}/>
        <div className={mobile.matches ?  'w-100 mx-auto my-4 align-items-center d-flex p-3 justify-content-between' : 'w-50 mx-auto my-4 align-items-center d-flex p-3 justify-content-between'}style={{backgroundColor:'rgb(240,240,240)'}}>
            <div><p style={{fontSize:'0.8rem',margin:'0 0.5rem'}}><img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/desktop-bfe-iphone-step1-bugatti-banner-att?wid=24&hei=24&fmt=png-alpha&.v=1658193314821'></img>Get up to $1000 credit after trade‑in.Δ</p></div>
            <div><p style={{fontSize:'0.8rem',margin:'0 0.5rem'}}><img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/desktop-bfe-iphone-step1-bugatti-banner-tmobile?wid=24&hei=24&fmt=png-alpha&.v=1658193314615'></img> Get up to $800 credit after trade‑in.º</p></div>
            <div><p style={{fontSize:'0.8rem',margin:'0 0.5rem'}}><img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/desktop-bfe-iphone-step1-bugatti-banner-verizon?wid=24&hei=24&fmt=png-alpha&.v=1658193314762'></img> Get up to $440 credit after trade‑in.ΔΔ</p></div>
         </div>
         <iPhonePriceContex.Provider value={{storageModify,setDisplayModify,setStorageModify,displayModify}}>
        {isLoading ? (<CircularProgress/>) : (<Castomize>
            <Row className={mobile.matches ? 'w-100 ' : 'w-100 p-3'}>
                <Col lg='8'>
                    <div className={mobile.matches ? 'w-100 sticky-top' : 'w-100 sticky-top p-5'}>
                        <h1 className={mobile.matches ? 'w-100 ' : 'w-100'} style={{fontSize:'3rem'}}>{data?.device_name}</h1>
                        <p>{<Price price={data?.price_number}/>}</p>
                        <CartButton className='mb-5' onClick={()=>AxiosAddToBag(userData?.id,'iphone',data.id,data?.price_number+storageModify.price+displayModify.price)}>Add to Bag</CartButton>
                        <div className='position-relative overflow-hidden'>
                            {[data?.img_0,data?.img_1,data?.img_2].filter((img,i)=>i === slideIndex).map(img=><motion.img variants={variants} initial={{opacity:0}} animate={(direction==-1) ? 'right' : 'left'} transition={{type:'spring',ease:'easeInOut',duration:'0.8'}} exit={{opacity:0}} className='w-100' key={slide} src={img} alt='img'/>)}
                            <motion.svg onClick={()=>paginate(1)} initial={{fill:'rgb(120,120,120)'}} whileHover={{scale:'1.05',fill:'black',}} style={{fill:'rgb(120,120,120)',width:'50px',height:'50px',top:'40%',position:'absolute',right:0,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></motion.svg>
                            <motion.svg onClick={()=>paginate(-1)} initial={{fill:'rgb(120,120,120)'}} whileHover={{scale:'1.05',fill:'black',}} style={{fill:'rgb(120,120,120)',width:'50px',height:'50px',top:'40%',position:'absolute',left:0,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></motion.svg>
                            <div style={{position:'absolute',bottom:0,left:mobile.matches ? '35%' : '45%',margin:'1rem',display:'flex',justifyContent:'space-between'}}>
                                {[data?.img_0,data?.img_1,data?.img_2].map((img,i)=><PaginationDots onClick={()=>setSlide([i,(slideIndex>i) ? -1 : 1])} key={img+i} active={(i===slideIndex) ? true : false} />)}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className={mobile.matches ? 'my-5' : 'p-5'}>
                        <p style={{margin:'0 0 15rem 0',borderRadius:'5rem',backgroundColor:'rgb(245,245,245)',padding:'0.5rem',textAlign:'center'}}>Get 3% Daily Cash back with Apple Card.</p>
                        <form className='my-5'>
                            <div className='my-5'>
                                <div style={{margin:'0 0 15rem 0'}}><svg className='d-block mx-auto' style={{width:'50px',height:'50px',margin:'0 0 1rem 0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/></svg><h4 className='text-center'>{data?.chip} and {data?.internet}.</h4></div>
                                <div style={{margin:'0 0 15rem 0'}}><svg className='d-block mx-auto' style={{width:'50px',height:'50px',margin:'0 0 1rem 0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg><h4 className='text-center'>{data?.camera}.</h4></div>
                                <div style={{margin:'0 0 15rem 0'}}><svg className='d-block mx-auto' style={{width:'60px',height:'60px',margin:'0 0 1rem 0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm272 96H96V320H352V192z"/></svg><h4 className='text-center'>{data?.battery}.</h4></div>
                                <Display display={data?.display} price={data?.price_number} device_name={data?.device_name} device='iPhone'/>
                                <div style={{margin:'0 0 15rem 0'}}>
                                    <h4>Finish. Pick your favorite.</h4>
                                    <div className='justify-content-between d-flex w-75'>
                                        {arrColors?.map(color=><ColorDots onClick={()=>setPickColor(color)} style={{transform: (pickColor==color) ? 'scale(1.5)' : 'scale(1)'}} key={color} color={color}/>)}
                                    </div>
                                    <p style={{fontSize:'0.8rem'}} className='w-75 my-5'>Every iPhone 14 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19.footnote◊◊◊</p>
                                </div>
                                <Storage storage={data?.gb} price={data?.price_number} device='iPhone'/>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Castomize>)}
        </iPhonePriceContex.Provider>
        <Footer mobile={mobile}/>
    </div>
}

BuyCastomizeiPhone.propTypes={
    mobile: PropTypes.any,
}

export default BuyCastomizeiPhone