import styled from 'styled-components'
import PropTypes from 'prop-types';
import { useState } from 'react';
import {wrap} from '@popmotion/popcorn'
import { motion } from 'framer-motion';

const Modal=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:white;
    z-index:10000;
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    justify-content:center;
    &::-webkit-scrollbar {
        display:none;
    }
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


const GalleryModal=({img,setGallery})=>{
    const [[slide,direction],setSlide]=useState([0,0])
    const slideIndex=wrap(0,img.length,slide)

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

    return <Modal>
                {img.filter((img,i)=>i === slideIndex).map(img=><motion.img variants={variants} initial={{opacity:0}} animate={(direction==-1) ? 'right' : 'left'} transition={{type:'spring',ease:'easeInOut',duration:'0.8'}} exit={{opacity:0}} className='w-50' key={slide} src={img} alt='img'/>)}
            <svg onClick={()=>setGallery(gallery=>!gallery)} style={{cursor:'pointer',borderRadius:'10rem',backgroundColor:'rgb(230,230,230)',fill:'rgb(120,120,120)',padding:'0.5rem',margin:'1rem',width:'40px',height:'40px',top:0,position:'absolute',left:0}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            <motion.svg onClick={()=>paginate(1)}  initial={{fill:'rgb(120,120,120)'}} whileHover={{scale:'1.05',fill:'black',}} style={{fill:'rgb(120,120,120)',width:'50px',height:'50px',top:'40%',position:'absolute',right:0,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></motion.svg>
            <motion.svg onClick={()=>paginate(-1)} initial={{fill:'rgb(120,120,120)'}} whileHover={{scale:'1.05',fill:'black',}} style={{fill:'rgb(120,120,120)',width:'50px',height:'50px',top:'40%',position:'absolute',left:0,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></motion.svg>
            <div style={{position:'absolute',bottom:0,margin:'1rem',display:'flex',justifyContent:'space-between'}}>
                {img.map((img,i)=><PaginationDots onClick={()=>setSlide([i,(slideIndex>i) ? -1 : 1])} key={img} active={(i===slideIndex) ? true : false} />)}
            </div>
    </Modal>
}

GalleryModal.propTypes={
    img: PropTypes.array,
    setGallery: PropTypes.func
}

export default GalleryModal