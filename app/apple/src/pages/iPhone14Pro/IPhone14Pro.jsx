import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import { useState, useRef, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Panels from './Panels'
import ColorBar from './ColorBar'
import IPhonePanel from '../iPhone/Usable/IPhonePanels'

const ColorDots=styled.div`
        border-radius: 3rem;
        width: 20px;
        height: 20px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
    `
const BuyButton=styled.button`
        border:none;
        padding: 0.5rem 1rem;
        background-color: rgb(30,144,255);
        color:white;
        border-radius: 3rem;
`
const colors = ['gold','purple','white']
const iphone = [{color: 'white',img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpGgoQASTj44e6eup90qJF1RhHSQwcA84M30aVFlyCQ2Ia1eI_'},{color: 'purple',img:'https://ocdn.eu/pulscms-transforms/1/ycPk9kpTURBXy82MDEyNWZiYmQzNzk5ZDAzOGI1Mjc5YWM4YmU0MmQ1Ny5qcGeSlQMAAM0PAM0IcJMFzQOOzQJf3gABoTAF'},{color: 'gold',img:'https://thinkapple.pl/wp-content/uploads/2022/10/iphone-15-2023-concept-main.jpg'}]

const IPhone14Pro=({mobile})=>{
    const [iphoneStart,setIPhoneStart]=useState('gold')
    const [barScrollTop,setBarScrollTop]=useState(null)
    const [isColorBar,setIsColorBar]=useState(true)
    const barRef = useRef()

    useEffect(()=>{
        setBarScrollTop(barRef.current.offsetTop)
    },[])


    return (
    <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        {isColorBar ? <ColorBar colors={colors} mobile={mobile} barScrollTop={barScrollTop} setIPhoneStart={setIPhoneStart}/>  :  ''}
        <div className='w-100 black-section' style={{backgroundColor:'black',margin:'0 0 0 0'}}>
            <div ref={barRef} className='d-flex justify-content-between w-50 mx-auto p-4 align-items-center'>
                <h1 className='text-light text-center font-weight-bold' style={{fontSize: mobile.matches ? '30px' : '65px'}}>Pro. Beyond.</h1>
                <div className='d-flex justify-content-between '>
                    {colors.map(color=><ColorDots onClick={()=>setIPhoneStart(color)} key={color} color={color}/>)}
                </div>
            </div>
            <div className='d-flex justify-content-center position-relative' style={{height:'450px'}}>
                <AnimatePresence>
                    {iphone.filter(iphone=>iphone.color===iphoneStart).map(iphone=><motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} key={iphone.img} className={mobile.matches ? 'd-block position-absolute mt-5 mx-auto w-100' : 'd-block position-absolute mt-5 mx-auto w-25'} src={iphone.img} alt="" />)}
                </AnimatePresence>
            </div>
        </div>
        <div className='w-100 grey-section' style={{backgroundColor:'rgb(40,40,40)',margin:'0 0 0 0'}}>
            <h1 className='text-light text-center p-5 font-weight-bold'>Phone 14 Pro and iPhone 14 Pro Max</h1>
            <h5 className='text-light text-center mb-5 font-weight-bold'>From $999 or $41.62/mo. for 24 mo. before trade‑in*</h5>
            <BuyButton className='d-block mx-auto my-5'>Buy</BuyButton>
            <Panels iphoneStart={iphoneStart} mobile={mobile} setIsColorBar={setIsColorBar}/>
        </div>
        <div className='p-5 my-5'>
            <IPhonePanel mobile={mobile}/>
        </div>
        <Footer mobile={mobile}/>
    </div>
    )
}

IPhone14Pro.propTypes={
    mobile: PropTypes.object
}


export default IPhone14Pro
