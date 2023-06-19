import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import TVandHomePanels from './TV&HomePanels'

const TVandHome=({mobile})=>{
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
            <Nav mobile={mobile}/>
                <img className='w-50 my-5 d-block mx-auto' src="https://www.apple.com/v/tv-home/j/images/overview/hero__dbphk49ymi2q_large.jpg" alt="" />
                <h1 className='display-2 text-center' style={{fontWeight:'bold'}}>The future hits home.</h1>
                <h4 className='w-75 mx-auto text-center my-5' style={{color:'rgb(140,140,140)'}}>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.</h4>
                <TVandHomePanels mobile={mobile}/>
                <h1 className='display-2 my-5 w-50 mx-auto text-center' style={{fontWeight:'bold'}}>Watch, sing, play, and work out. On the big screen.</h1>
                <video className='my-5 w-75 mx-auto d-block' style={{border:'5px black solid',boxShadow: '11px 15px 28px -1px rgba(66, 68, 90, 1)'}} src="https://www.apple.com/105/media/us/tv-home/2022/4447b88b-1a33-4bb3-98a1-61d8949e1098/anim/sizzle/large.mp4" autoPlay muted loop></video>
            <Footer mobile={mobile} />
        </div>
    )
}

TVandHome.propTypes={
    mobile: PropTypes.object
}

export default TVandHome