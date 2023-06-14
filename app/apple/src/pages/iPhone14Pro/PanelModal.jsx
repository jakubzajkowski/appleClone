import { motion } from "framer-motion";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState,useEffect,useRef } from "react";

const Modal=styled(motion.div)`
position:fixed;
height:100vh;
width:200%;
z-index:100;
top:0;
left:0;
right:0;
bottom:0;
background-color:black;
overflow:hidden;
@media(max-width:950px){
    width:500%;
}
`

const PanelModal=({panelModalContent,mobile,setIsColorBar,setIsModal})=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()

    const handleModal=()=>{
        setIsColorBar(bar=>!bar)
        setIsModal(modal=>!modal)
    }

    useEffect(()=>{
        if (mobile.matches){
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/5)
        }
        else{
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/2)
        }
    })
    return (
        <Modal initial={{visibility:'hidden'}} animate={{visibility:'visible',x:['100%','0%']}} exit={{x:['0%','100%']}} transition={{duration:1}}>
                <motion.div ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} className="d-flex position-relative w-100 justify-content-between align-items-center text-light" style={{margin:'1rem 0 0 0',height:'90%'}}>
                    <div className="mx-5" style={{width:'14%'}}>
                        <h1 className="mb-5">{panelModalContent?.title}</h1>
                        <img className="mt-5" src={panelModalContent?.imgTitle} style={{pointerEvents:'none',width:'110%'}} alt="" />
                    </div>
                    <p className="mx-5" style={{width:'14%'}}>{panelModalContent?.text0}</p>
                    <img className="mt-5 mx-5" style={{width:'14%', pointerEvents:'none'}} src={panelModalContent?.img0}  alt="" />
                    <p className="mx-5" style={{width:'14%'}}>{panelModalContent?.text1}</p>
                    <img className="mt-5 mx-5" style={{width:'14%', pointerEvents:'none'}} src={panelModalContent?.img1}  alt="" />
                    <p className="mx-5" style={{width:'14%'}}>{panelModalContent?.text2}</p>
                    <img className="mt-5 mx-5" style={{width:'14%', pointerEvents:'none'}} src={panelModalContent?.img2}  alt="" />
                </motion.div>
                <div className="position-relative w-100" style={{height:'10%'}}>
                    <svg onClick={handleModal} className="mx-5" style={{width:'40px',height:'40px',fill:'black',backgroundColor:'rgb(190,190,190)',borderRadius:'10rem'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
        </Modal>
    )
}

PanelModal.propTypes={
    panelModalContent: PropTypes.object,
    mobile:PropTypes.object,
    setIsColorBar:PropTypes.func,
    setIsModal:PropTypes.func
}

export default PanelModal