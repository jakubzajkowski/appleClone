import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {motion} from 'framer-motion'

function DesktopNavigation() {
    const [showStore, setShowStore] = useState(false);
    const [showMac, setShowMac] = useState(false);
    const [showIpad, setShowIpad] = useState(false);
    const [showIphone, setShowIphone] = useState(false);
    const [showTvAndHome, setShowTvAndHome] = useState(false);
    const [showSupport, setShowSupport] = useState(false);
    const variants = {
        visible: { opacity: 1,y:'0' },
        hidden: { opacity: 0,y:'-30px' },
      }
    return  (<>
    <Navbar style={{backgroundColor:'rgb(60, 60, 60,0.9)',backdropFilter: 'blur(8px)',WebkitBackdropFilter: 'blur(8px)'}} fixed='top' variant="dark">
        <Container className="mx-center ">
          <Navbar.Collapse id="basic-navbar-nav" className='text-danger'>
            <Nav className='m-auto align-items-center position-relative' >
              <svg style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <NavDropdown className='mx-3' align='start' style={{fontSize:'0.8rem'}} show={showStore}  onMouseEnter={()=>setShowStore(!showStore)}  onMouseLeave={()=>setShowStore(!showStore)} title="Store" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="/store" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Store</NavDropdown.Item>
                <NavDropdown.Item href="/store"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showStore ? 'visible' : 'hidden'}>Shop The Lastest</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="/store/buy-mac"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showStore ? 'visible' : 'hidden'}>Mac</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="/store/buy-ipad"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showStore ? 'visible' : 'hidden'}>Ipad</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="/store/buy-iphone"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showStore ? 'visible' : 'hidden'}>Iphone</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='mx-3' show={showMac} style={{fontSize:'0.8rem'}} onMouseEnter={()=>setShowMac(!showMac)}  onMouseLeave={()=>setShowMac(!showMac)} title="Mac" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="#action/3.1" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Explore Mac</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showMac ? 'visible' : 'hidden'}>Explore All Mac</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showMac ? 'visible' : 'hidden'}>MacBook Air</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showMac ? 'visible' : 'hidden'}>MacBook Pro</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showMac ? 'visible' : 'hidden'}>IMac</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='mx-3' show={showIpad} style={{fontSize:'0.8rem'}} onMouseEnter={()=>setShowIpad(!showIpad)}  onMouseLeave={()=>setShowIpad(!showIpad)} title="Ipad" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="#action/3.1" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Explore Ipad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIpad ? 'visible' : 'hidden'}>Explore All Ipad</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIpad ? 'visible' : 'hidden'}>Ipad Air</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="/ipad-pro"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIpad ? 'visible' : 'hidden'}>Ipad Pro</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIpad ? 'visible' : 'hidden'}>IPad</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='mx-3' show={showIphone} style={{fontSize:'0.8rem'}} onMouseEnter={()=>setShowIphone(!showIphone)}  onMouseLeave={()=>setShowIphone(!showIphone)} title="Iphone" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="#action/3.1" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Explore IPhone</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIphone ? 'visible' : 'hidden'}>Explore All IPhone</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="/iphone-14-pro"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIphone ? 'visible' : 'hidden'}>IPhone 14 Pro</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIphone ? 'visible' : 'hidden'}>IPhone 14</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIphone ? 'visible' : 'hidden'}>IPhone 13</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showIphone ? 'visible' : 'hidden'}>IPhone 12</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='mx-3' show={showTvAndHome} style={{fontSize:'0.8rem'}} onMouseEnter={()=>setShowTvAndHome(!showTvAndHome)}  onMouseLeave={()=>setShowTvAndHome(!showTvAndHome)} title="TV & Home" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="#action/3.1" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Explore TV & Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showTvAndHome ? 'visible' : 'hidden'}>Explore TV & Home</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showTvAndHome ? 'visible' : 'hidden'}>Apple TV 4K</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showTvAndHome ? 'visible' : 'hidden'}>HomePod</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='mx-3' show={showSupport} style={{fontSize:'0.8rem'}} onMouseEnter={()=>setShowSupport(!showSupport)}  onMouseLeave={()=>setShowSupport(!showSupport)} title="Support" menuVariant="dark" id="nav-dropdown-dark-example">
                <NavDropdown.Item href="#action/3.1" style={{width:'99vw',margin:'0 0 0.6rem 0'}}>Explore Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showSupport ? 'visible' : 'hidden'}>Iphone</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showSupport ? 'visible' : 'hidden'}>Mac</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showSupport ? 'visible' : 'hidden'}>TV</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showSupport ? 'visible' : 'hidden'}>IPod</motion.h3></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><motion.h3 transition={{duration:0.5}} variants={variants} animate={showSupport ? 'visible' : 'hidden'}>Music</motion.h3></NavDropdown.Item>
              </NavDropdown>
              <svg style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              <svg style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <div className='mt-5 p-1 w-100 text-center align-items-center' style={{fontSize:'0.9rem',backgroundColor:'white'}}>
        <p className='my-2'>Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1 <a style={{textDecoration:'none'}} href='#xd'>Shop iPhone</a></p>
    </div>
</>)
}



export default DesktopNavigation