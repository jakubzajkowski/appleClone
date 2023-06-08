import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRef,useEffect} from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'
import iPadBorder from '../../img/pngegg.png'
import IPadProParallax from './iPadProParallaxiPad'
import IPadPanel from '../IPad/Usable/IPadPanels'

const IPadPro=({mobile})=>{
    const textRef= useRef()
    const chipRef= useRef()
    const isInViewText=useInView(textRef,{once:true})
    const isInViewChip=useInView(chipRef,{once:true})
    const mainControlsText=useAnimation()
    const mainControlsChip=useAnimation()

    useEffect(()=>{
        if(isInViewText){
            mainControlsText.start('visible')
        }
        if(isInViewChip){
            mainControlsChip.start('hiddenChip')
        }
    },[isInViewText,isInViewChip])
    const variants = {
        visible:{
            opacity:1
        },
        hidden:{
            opacity:0,
        },
        hiddenChip:{
            opacity:0,
            scale:3
        }
    }

    return (<div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <div className='w-100 black-section' style={{backgroundColor:'black',margin:'0 0 2rem 0'}}>
            <h1 className='text-light text-center font-weight-bold' style={{fontSize:'72px'}}>iPad Pro</h1>
            <h1 className='text-center' style={{background: '-webkit-linear-gradient(#833ab4,#fd1d1d,#fcb045)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>Supercharged by</h1>
            <img className='d-block mx-auto' src="https://www.apple.com/v/ipad-pro/am/images/overview/hero/m2_logo__90ungfqgnsiu_large.png" alt="chip" />
            <video className={mobile.matches ? 'd-block mx-auto w-100' : 'd-block mx-auto w-50'} muted loop autoPlay src="https://www.apple.com/105/media/us/ipad-pro/2022/08087f4b-7539-4b1e-ae8a-adc18f4242ae/anim/hero/large.mp4"></video>
            <motion.h3 initial='hidden' variants={variants} animate={mainControlsText} transition={{duration:0.8,delay:0.2}} ref={textRef} className='text-light w-50 text-center mx-auto'>Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16. The ultimate iPad experience.</motion.h3>
            <motion.h3 initial='hidden' variants={variants} animate={mainControlsText} transition={{duration:0.8,delay:0.}} ref={textRef} className={mobile.matches ? 'text-light w-100 text-center mx-auto':'text-light w-25 text-center mx-auto'} style={{fontSize:mobile.matches ? '34px' : '60px',margin:'15rem 0 1rem 0'}}>M2 chip Next‑generation performance Next‑generation capabilities.</motion.h3>
            <img className='d-block mx-auto w-100' src="https://www.apple.com/v/ipad-pro/am/images/overview/chip/performance_hero__cxya4f2p5euu_large.jpg" alt="" />
            <h4 className='text-light w-50 text-center mx-auto' style={{margin:'5rem 0 1rem 0'}}>M2 chip.<span style={{color:'rgb(190,190,190)'}}>The M2 chip is the next generation of Apple silicon, with an 8‑core CPU that delivers up to 15 percent faster performance and a 10‑core GPU that provides up to 35 percent faster graphics performance.1 With a 40 percent faster Neural Engine to accelerate machine learning tasks and 50 percent more memory bandwidth, M2 brings astonishing performance and new capabilities to iPad Pro. So you can create photorealistic 3D designs, build intricate AR models, and play games with console‑quality graphics at high frame rates faster than ever. All while enjoying all‑day battery life.2</span></h4>
            <div className='position-relative d-flex justify-content-center p-5'> 
                <motion.img initial='visible' variants={variants} animate={mainControlsChip} transition={{duration:0.5,delay:0.1}} className='d-block mx-auto' style={{position:'absolute',width:'610px',height:'610px'}} src="https://www.apple.com/v/ipad-pro/am/images/overview/chip/m2_start_state__bt83pgdysr1e_large.jpg" alt="chip" />
                <img className='d-block mx-auto' style={{width:'400px',height:'400px',margin:'5rem 0 0 0'}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSeIPQopM4PD1g4R6tAG9eTs86ymmQ9VAMg5DvXmKWD0IjnA6i" alt="chip" />
            </div>
            <h1 ref={chipRef} className='text-light text-center' style={{margin:'10rem 0 1rem 0',fontSize:'60px',background: '-webkit-linear-gradient(#833ab4,#fd1d1d,#fcb045)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>8-core CPU 10-core GPU 16-core Neural Engine</h1>
            <div className='d-lg-flex justify-content-center'>
                <div className={mobile.matches ? 'position-relative text-start w-100 mx-5' : 'position-relative text-start w-25 mx-5'}>
                    <h5 className='text-light w-75 text-start mx-auto' style={{margin:'10rem 0 1rem 0'}}>A complete movie studio in your hands.<span style={{color:'rgb(190,190,190)'}}>The high‑performance media engine on M2 accelerates ProRes encode and decode. So you can convert video projects to ProRes up to 3x faster than before.3</span></h5>
                    <h5 className='text-light w-75 text-start mx-auto'>ProRes video capture.<span style={{color:'rgb(190,190,190)'}}>Now you can capture ProRes video using the image signal processor in M2 and advanced cameras on iPad Pro. Five studio‑quality microphones and four-speaker audio with support for Dolby Atmos let you record and deliver theater‑like sound. And with Final Cut Pro for iPad, you can capture in ProRes and get the highest video quality with amazing real-time performance for tasks like multistream editing.</span></h5>
                </div>
                <div className='position-relative d-flex justify-content-center p-5' style={{margin:'4rem 5rem 1rem 0'}}>
                    <img style={{height:mobile.matches ? '250px' : '625px',position:'absolute'}} src={iPadBorder} alt="" />
                    <img style={{margin:'2.2rem 0 0 0',height:mobile.matches ? '200px' : '500px'}}  src="https://www.apple.com/v/ipad-pro/am/images/overview/chip/graphics_screen__cr7y07sbcoae_large.jpg" alt="" />
                </div>
            </div>
            <div className='position-relative p-5' style={{margin:'0.2rem 0 1rem 0'}}>
                <h3 className={mobile.matches ? 'text-light w-100 text-center mx-auto':'text-light w-50 text-start mx-auto'} style={{fontSize:mobile.matches ? '34px' : '75px',margin:'15rem 0 1rem 0'}}>12.9”Liquid Retina XDR display. Best and brightest.</h3>
                <h5 className={mobile.matches ? 'text-light w-100 text-start mx-auto' : 'text-light w-50 text-start mx-auto'}>Extreme dynamic range on the 12.9-inch iPad Pro.4<span style={{color:'rgb(190,190,190)'}}>The Liquid Retina XDR display delivers true-to-life detail with a 1,000,000:1 contrast ratio, great for viewing and editing HDR photos and videos or enjoying your favorite movies and TV shows. It also features a breathtaking 1000 nits of full‑screen brightness and 1600 nits of peak brightness along with advanced display technologies like P3 wide color, True Tone, and ProMotion. And you can use Reference Mode for a more color-accurate workflow.</span></h5>
            </div>
            <IPadProParallax mobile={mobile}/>
            <div>
                <h3 className={mobile.matches ? 'text-light w-100 text-center mx-auto':'text-light w-50 text-start mx-auto'} style={{fontSize:mobile.matches ? '34px' : '75px',margin:'0rem 0 1rem 0'}}>11” Liquid Retina display. Pixel‑perfect portability.</h3>
                <img className='d-block mx-auto w-75' src="https://www.apple.com/v/ipad-pro/am/images/overview/display-liquid-retina/liquid_retina_endframe__ba3q4hiulfxe_large.jpg" alt="" />
            </div>
            <div className='p-5'>
                <h3 className={mobile.matches ? 'text-light w-100 text-center mx-auto':'text-light w-50 text-start mx-auto'} style={{fontSize:mobile.matches ? '34px' : '75px',margin:'0rem 0 1rem 0'}}>iPadOS. Expand what’s possible.</h3>
                <h5 className='text-light w-50 my-5 text-start mx-auto' style={{margin:'10rem 0 1rem 0'}}>Enhanced ways to work.<span style={{color:'rgb(190,190,190)'}}>iPadOS 16 gives you powerful new ways to do more than ever. New desktop-class apps make your workday more productive. Resize and overlap apps to multitask like a pro with Stage Manager.5 And hook up an external display, with resolutions up to 6K, for even more room for all your apps.6</span></h5>
                <img className='d-block mx-auto w-75' src="https://www.apple.com/v/ipad-pro/am/images/overview/ipados/thunderbolt_hero__bn4yb1ktt4dy_large.jpg" alt="" />
            </div>
        </div>
        <IPadPanel />
        <Footer mobile={mobile}/>
    </div>)
}

IPadPro.propTypes={
    mobile: PropTypes.object
}

export default IPadPro