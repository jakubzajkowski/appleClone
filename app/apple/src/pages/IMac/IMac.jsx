import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRef, useState } from 'react'
import IMacColorSelectBar from './IMacColorSelectBar'
import IMacParallax from './IMacParallax'
import MacPanel from '../Mac/Usable/MacPanels'


const IMac=({mobile})=>{
    const [isPausedVid0,setIsPausedVid0]=useState(true)
    const [isPausedVid1,setIsPausedVid1]=useState(true)
    const videoRef0=useRef()
    const videoRef1=useRef()

    const video0Handler=()=>{
        if (isPausedVid0){
            videoRef0.current.pause()
            setIsPausedVid0(paused=>!paused)
        }
        else{
            videoRef0.current.play()
            setIsPausedVid0(paused=>!paused)
        }
    }
    const video1Handler=()=>{
        if (isPausedVid1){
            videoRef1.current.pause()
            setIsPausedVid1(paused=>!paused)
        }
        else{
            videoRef1.current.play()
            setIsPausedVid1(paused=>!paused)
        }
    }


    return (<div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(255,255,255)'}}>
        <Nav mobile={mobile}/>
        <div className={mobile.matches ? 'w-100 mx-auto':'w-75 mx-auto'}>
            {mobile.matches ? <img className="w-100" src="http://t2.gstatic.com/images?q=tbn:ANd9GcRmNy8BJS6hMmJZsU_d0hbKjI7yuny-Axr54x4Qn07kSMYJ4ZEs" alt="" /> : <img className="w-100" src="https://www.apple.com/v/imac-24/h/images/overview/hero_endframe__fpycn08d62ai_large_2x.jpg" alt="" />}
            <h2 className="w-50 text-center d-block mx-auto">Say <span style={{background: '-webkit-linear-gradient(left,green,orange, red,purple,blue)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>hello to the new iMac</span>.Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.</h2>
            <h3 className="text-center my-5">From $1299</h3>
            <h1 className="w-75 text-start display-4" style={{fontWeight:'bold',margin:'10rem auto 1rem auto'}}>Seven vibrant colors.You do <span style={{background: '-webkit-linear-gradient(left,orange, red,purple)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>hue.</span></h1>
            <div className="w-100 my-5 mx-auto position-relative">
                <video ref={videoRef0} className="w-100" autoPlay loop muted src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-hero/large.mp4"></video>
                {isPausedVid0 ? <svg onClick={video0Handler} style={{width:'30px',height:'30px',position:'absolute',cursor:'pointer',margin:'1rem',right:'0',bottom:'0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg> : <svg onClick={video0Handler} style={{width:'30px',height:'30px',position:'absolute',cursor:'pointer',margin:'1rem',right:'0',bottom:'0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>}
            </div>
            <IMacColorSelectBar mobile={mobile}/>
            <div className="w-100 my-5 mx-auto position-relative">
                <video ref={videoRef1} className="w-100" autoPlay loop muted src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-lifestyle/large.mp4"></video>
                {isPausedVid1 ? <svg onClick={video1Handler} style={{width:'30px',height:'30px',position:'absolute',cursor:'pointer',margin:'1rem',right:'0',bottom:'0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg> : <svg onClick={video1Handler} style={{width:'30px',height:'30px',position:'absolute',cursor:'pointer',margin:'1rem',right:'0',bottom:'0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>}
            </div>
            <IMacParallax mobile={mobile}/>
        </div>
        <div className='my-5'>
            <MacPanel />
        </div>
        <Footer mobile={mobile}/>
    </div>    
    )
}

IMac.propTypes={
    mobile:PropTypes.object
}


export default IMac