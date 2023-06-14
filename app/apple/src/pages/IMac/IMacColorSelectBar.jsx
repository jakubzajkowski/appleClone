import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {IMacImgColors} from './IMacImgColors'
import { motion,AnimatePresence } from 'framer-motion'

const ColorDots=styled.div`
        border-radius: 3rem;
        width: 30px;
        height: 30px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
    `

const IMacColorSelectBar=({mobile})=>{
    const [color,setColor]=useState('green')

    const colors = ['green','yellow','orange','red','purple','blue']

    return (
                        IMacImgColors.filter(imac=>imac.color==color).map(imac=><div key={imac.color} className='d-md-flex justify-content-between w-100 mx-auto'>
                        <div style={{width:mobile.matches ? '100%':'49%',padding:'5rem',display:'flex',alignItems:'center',backgroundColor:'rgb(250,250,250)'}}>
                            <div className='flex-md-column justify-content-between '>
                                {colors.map(color=><ColorDots onClick={()=>setColor(color)} key={color} color={color}/>)}
                            </div>
                            <AnimatePresence initial={true}>{
                                (color===imac.color) && (<motion.img key="img0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className='w-25 mx-auto d-block' src={imac.imgs[0]} alt="" />)}
                            </AnimatePresence>
                        </div>
                        <div style={{width:mobile.matches ? '100%':'49%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <div style={{height:'48%',padding:'5rem',backgroundColor:'rgb(250,250,250)'}}>
                                <AnimatePresence initial={true}>{
                                    (color===imac.color) && (<motion.img key="img1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className='w-50 mx-auto d-block' src={imac.imgs[1]} alt="" />)}
                                </AnimatePresence>
                            </div>
                            <div style={{height:'48%',padding:'5rem',backgroundColor:'rgb(250,250,250)'}}>
                                <AnimatePresence initial={true}>{
                                    (color===imac.color) && (<motion.img key="img2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className='w-50 mx-auto d-block' src={imac.imgs[2]} alt="" />)}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>)
    )
}

IMacColorSelectBar.propTypes={
    mobile:PropTypes.object
}

export default IMacColorSelectBar