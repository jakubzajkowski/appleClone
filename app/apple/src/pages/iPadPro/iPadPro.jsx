import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Ref } from 'react'
import { motion } from 'framer-motion'

const IPadPro=({mobile})=>{
    return (<div style={{width:mobile.matches ? '100vw' : '99vw',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <div className='w-100 black-section' style={{backgroundColor:'black'}}>
            <h2 className='text-light'>iPad Pro</h2>
            <h4 style={{background: '-webkit-linear-gradient(#833ab4,#fd1d1d,#fcb045)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>Supercharged by</h4>
            <img src="https://www.apple.com/v/ipad-pro/am/images/overview/hero/m2_logo__90ungfqgnsiu_large.png" alt="chip" />
        </div>
        <Footer mobile={mobile}/>
    </div>)
}

IPadPro.propTypes={
    mobile: PropTypes.object
}

export default IPadPro