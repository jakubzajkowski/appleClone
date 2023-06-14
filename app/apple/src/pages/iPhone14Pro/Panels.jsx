import { motion,AnimatePresence } from "framer-motion";
import { PhotosAndColors,Static } from "./Photos";
import PropTypes from 'prop-types'
import PanelModal from "./PanelModal";
import { useState } from "react";

const Panels=({iphoneStart,mobile,setIsColorBar})=>{
    const [panelModalContent,setPanelModalContent]=useState(null)
    const [isModal,setIsModal]=useState(false)
    const handleModals=(content)=>{
        setIsModal(modal=>!modal)
        setPanelModalContent(content)
        setIsColorBar(color=>!color)
    }
    return <>
    <AnimatePresence>
        {isModal && (
            <PanelModal panelModalContent={panelModalContent} setIsModal={setIsModal} setIsColorBar={setIsColorBar} mobile={mobile}/>
        )}
    </AnimatePresence>
    <div className={mobile.matches ? 'w-100 panels-section p-4 mx-auto':'w-75 panels-section p-4 mx-auto'}>{PhotosAndColors.filter(iphone=>iphone.color===iphoneStart).map(iphone=><motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:2}} key={iphone.color} className={mobile.matches ? 'flex-sm-column mt-5 mx-auto w-100' : 'flex-sm-column mt-5 mx-auto w-75'} alt="">
            <div className='my-3 d-md-flex justify-content-between'>
                <div style={{backgroundColor:'black',overflow:'hidden',width:mobile.matches ? '100%':'69%'}} className='p-4 rounded position-relative'>
                    <motion.h2 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-2'>{iphone.panels[0].text}</motion.h2>
                    <motion.img initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} className='w-75 mx-auto d-block' src={iphone.panels[0].img} alt="" />
                    <motion.svg onClick={()=>handleModals(iphone.panels[0].modal)} initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',cursor:'pointer',width:'40px',borderRadius:'10rem',padding:'0.3rem',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                </div>
                <div style={{overflow:'hidden',width:mobile.matches ? '100%':'29%'}} className="flex-sm-column">
                    <div style={{backgroundColor:'black',height:'49%',overflow:'hidden',backgroundImage:`url(${iphone.panels[1].img})`}} className="p-4 rounded position-relative">
                        <motion.h2 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-2'>{iphone.panels[1].text}</motion.h2>
                        <motion.svg onClick={()=>handleModals(iphone.panels[1].modal)}  initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',width:'40px',borderRadius:'10rem',padding:'0.3rem',cursor:'pointer',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                    </div>
                    <div style={{backgroundColor:'black',height:'49%',overflow:'hidden',margin:'1rem 0'}} className="p-4 rounded position-relative">
                        <motion.h2 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-2'>{iphone.panels[2].text}</motion.h2>
                        <motion.img initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} className='w-100 mx-auto d-block' src={iphone.panels[2].img} alt="" />
                        <motion.svg onClick={()=>handleModals(iphone.panels[2].modal)} initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',width:'40px',borderRadius:'10rem',padding:'0.3rem',cursor:'pointer',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                    </div>
                </div>
            </div>
            <div className='my-3 d-md-flex justify-content-between'>
                <div style={{backgroundColor:'black',width:mobile.matches ? '100%':'29%'}} className='p-4 rounded position-relative'>
                    <motion.h1 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-2 w-50 mx-auto'>{iphone.panels[3].text}</motion.h1>
                    <motion.svg onClick={()=>handleModals(iphone.panels[3].modal)} initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',width:'40px',borderRadius:'10rem',padding:'0.3rem',cursor:'pointer',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                </div>
                <div style={{width:mobile.matches ? '100%':'69%',backgroundImage:`url(https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/cinematic-mode/cinematic_mode_endframe__diuub0hv8nau_large.jpg)`}} className='p-5 rounded position-relative'>
                    <motion.h2 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-5'>Pro video Film like a Pro.</motion.h2>
                    <motion.svg initial={{y:'0%'}} onClick={()=>handleModals(Static[0])} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',width:'40px',borderRadius:'10rem',padding:'0.3rem',cursor:'pointer',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                </div>
            </div>
            <div className='my-3 d-md-flex justify-content-between'>
                <div style={{backgroundColor:'black',width:mobile.matches ? '100%':'69%'}} className='p-4 rounded position-relative'>
                    <motion.h2 initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{color:iphone.color}} className='text-center my-5'>{iphone.panels[4].text}</motion.h2>
                    <motion.img initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} className='w-75 mx-auto d-block' src={iphone.panels[4].img} alt="" />
                    <motion.svg onClick={()=>handleModals(iphone.panels[4].modal)} initial={{y:'0%'}} whileInView={{ y: ['-20%','0%'] }} viewport={{ once: true }} transition={{duration:1}} style={{height:'40px',width:'40px',borderRadius:'10rem',cursor:'pointer',padding:'0.3rem',backgroundColor:'white',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></motion.svg>
                </div>
                {mobile.matches ? '' : <div style={{backgroundColor:'black',width:mobile.matches ? '100%':'29%'}} className='rounded position-relative'>
                    <h2 style={{color:'white',top:'20%',position:'absolute',zIndex:'6'}} className='text-center'>Action modeShaky shots, stable video.</h2>
                    <svg onClick={()=>handleModals(Static[0])} style={{height:'40px',width:'40px',borderRadius:'10rem',zIndex:'6',padding:'0.3rem',backgroundColor:'white',cursor:'pointer',fill:'black',position:'absolute',bottom:'0',right:'0'}} className='m-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    <video className='rounded' style={{position:'absolute',top:0,left:0,bottom:0,right:0,zIndex:'4',height:'100%',width:'100%'}} autoPlay loop muted src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/action-mode/large.mp4"></video>
                </div>}
            </div>
        </motion.div>)
    }</div>
    </>
}

Panels.propTypes={
    iphoneStart : PropTypes.any,
    mobile:PropTypes.object,
    setIsColorBar:PropTypes.func
}

export default Panels