import IpadSlide from '../../img/ipad_for_slide.png'
import { Parallax } from 'react-scroll-parallax'
import PropTypes  from 'prop-types'

const pStyle={
    fontSize:'60px',
    background: '-webkit-linear-gradient(#b3ffab, #12fff7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    listStyle:'none',
    fontWeight:'bold',
}
const pStyleMobile={
    fontSize:'22px',
    background: '-webkit-linear-gradient(#b3ffab, #12fff7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    listStyle:'none',
    fontWeight:'bold',
}

const liStyle={
    listStyle:'none',
}

const IPadProParallax=({mobile})=>{
    return (
        <div className='position-relative p-5' style={{margin:'30rem 0 0rem 0'}}>
            <Parallax speed={mobile.matches ? -30 : -35} scale={[1,3]} style={{position:'relative',zIndex:2}}>
                <img className={mobile.matches ? 'w-100 d-block mx-auto' : 'w-50 d-block mx-auto'} src={IpadSlide} alt="" />
            </Parallax>
            <Parallax speed={mobile.matches ? 60 : 80} style={{position:'relative',zIndex:1,margin:'0rem 0 0 0'}}>
                <div className={mobile.matches ? 'p-1 w-100':'p-5 w-50'} style={{position:'relative',margin: mobile.matches ? '0 0 0 0':'0 0 0 20%'}}>
                    <div className='d-flex justify-content-start'>
                        <ul>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>1000 nits</p><p style={{fontSize:'0.8rem',color:'white'}}>full-screen brightness</p></li>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>True Tone</p><p style={{fontSize:'0.8rem',color:'white'}}>adaptive 120Hz refresh rate</p></li>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>ProMotion</p><p style={{fontSize:'0.8rem',color:'white'}}>for comfortable viewing</p></li>
                        </ul>
                        <ul>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>1600 nits</p><p style={{fontSize:'0.8rem',color:'white'}}>peak brightness (HDR)</p></li>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>1,000,000:1</p><p style={{fontSize:'0.8rem',color:'white'}}>contrast ratio</p></li>
                            <li style={liStyle}><p style={mobile.matches ? pStyleMobile : pStyle}>P3</p><p style={{fontSize:'0.8rem',color:'white'}}>wide color gamut</p></li>
                        </ul>
                    </div>
                </div>
                <div className={mobile.matches ? 'w-100 mx-auto' : 'w-50 mx-auto'} style={{margin:'10rem 0 1rem 0'}}>
                    <div className={mobile.matches ? 'text-light my-5 w-75 text-start':'text-light my-5 w-50 text-start'}>
                        <p style={{fontSize:'0.8rem',color:'rgb(200,200,200)'}}>Powered by over</p>
                        <h1 style={{fontSize:'60px',background: '-webkit-linear-gradient(#12c2e9,#c471ed,#f64f59)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',}}>10,000</h1>
                        <p style={{fontSize:'0.8rem',color:'rgb(200,200,200)'}}>mini-LEDs</p>
                    </div>
                    <h5 className='text-light my-5 w-50 text-start'>Mini‑LEDs.<span style={{color:'rgb(190,190,190)'}}>To achieve extremely high brightness, we used an array of LEDs across the entire back of the display. To fit them in the incredibly thin iPad Pro, we used custom‑designed mini‑LEDs that are 120 times smaller than in previous generations. Custom‑size optical films and diffusers mix the light more efficiently and fit in a design that’s just 6.4 mm thin.</span></h5>
                </div>
                <div className={mobile.matches ? 'w-100 mx-auto' :'w-50 mx-auto'} style={{margin:'10rem 0 1rem 0'}}>
                    <div className={mobile.matches ? 'text-light my-5 w-75 text-start' : 'text-light my-5 w-50 text-start'}>
                        <p style={{fontSize:'0.8rem',color:'rgb(200,200,200)'}}>Over</p>
                        <h1 style={{fontSize:'60px',background: '-webkit-linear-gradient(#12c2e9,#c471ed,#f64f59)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',}}>2500</h1>
                        <p style={{fontSize:'0.8rem',color:'rgb(200,200,200)'}}>local dimming zones</p>
                    </div>
                    <h5 className='text-light my-5 w-50 text-start'>Local dimming zones.<span style={{color:'rgb(190,190,190)'}}>Over 10,000 mini‑LEDs are grouped into more than 2500 local dimming zones. Depending on the content, the brightness in each zone can be precisely adjusted to achieve an astonishing 1,000,000:1 contrast ratio. Even the most detailed HDR content with the finest specular highlights — like galaxies and action movie explosions — are more true to life than ever.</span></h5>
                </div>
            </Parallax>
        </div>
    )
}
IPadProParallax.propTypes={
    mobile:PropTypes.object
}

export default IPadProParallax