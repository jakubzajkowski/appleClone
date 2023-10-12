import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bar from "./Bar";
import Footer from '../../components/Footer';
import {useContext} from "react";
import {MobileContext} from "../../context.jsx";


const Home=()=>{
    const mobile = useContext(MobileContext)
    return <div style={{width:mobile.matches ? '100vw' : '99vw'}}>
        <Nav mobile={mobile}/>
        <div className="w-100 position-relative iphone-14-pro__section" style={{backgroundColor:'black'}}>
            <h1 className="text-center p-3 text-light" style={{fontSize:'3rem',fontWeight:'bold'}}>iPhone 14 Pro</h1>
            <h4 className="text-center text-light" style={{fontSize:'2rem'}}>Pro. Beyond.</h4>
            <div className="d-flex w-50 mx-auto justify-content-around text-primary p-2">
                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
            </div>
            <video className="w-75 rounded mx-auto d-block" src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large.mp4" autoPlay muted loop></video>
        </div>
        <div className="w-100 position-relative iphone-14__section" style={{backgroundColor:'white'}}>
            <h1 className="text-center mt-5 p-4 text-dark" style={{fontSize:'3rem',fontWeight:'bold'}}>iPhone 14</h1>
            <h4 className="text-center text-dark" style={{fontSize:'2rem'}}>Wonderfull.</h4>
            <div className="d-flex w-50 mx-auto justify-content-around text-primary p-2">
                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
            </div>
            <img className="w-50 rounded mx-auto d-block" src="https://v.wpimg.pl/OGJiMGM0YCYrCzt0YkttM2hTby4kEmNlP0t3ZWIId3EyXXR_YlYmKy8bKDciHig1PxksMD0ePytlCD0uYkZ-aC4APjchUTZoLwQvIikfeSMpW34ldQliJH4KKGp5Ant1Zwsud30dfHQsUHUlLwAsc30Lbzo" alt="" />
        </div>
        <div className="w-100 position-relative ipad-pro__section p-5" style={{backgroundColor:'black'}}>
        <Container className="mx-auto w-100">
            <Row>
                <Col className="align-items-center justify-content-center d-flex" md={4} >
                    <div>
                        <h1 className="text-center text-light" style={{fontSize:'3rem',fontWeight:'bold'}}>iPad Pro</h1>
                        <p className="text-center text-light" style={{fontSize:'1.5rem'}}>Supercharged by</p>
                        <img className="w-25 mx-auto d-block" style={{verticalAlign: 'middle'}} src="https://www.apple.com/v/ipad-pro/am/images/overview/hero/m2_logo__90ungfqgnsiu_large.png" alt="" />
                        <div className="d-flex justify-content-around text-primary p-2">
                            <p style={{cursor:'pointer',listStyle:'none'}}>Learn  More</p>
                            <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <video className="w-100 rounded mx-auto d-block" src="https://www.apple.com/105/media/us/ipad-pro/2022/08087f4b-7539-4b1e-ae8a-adc18f4242ae/anim/hero/large.mp4" autoPlay muted loop></video>
                </Col>
            </Row>
        </Container>
        </div>
        <div className="w-100 panels__section text-center mx-auto p-3" style={{backgroundColor:'white'}} >
                <Row className="p-3">
                    <Col style={{backgroundColor:'white'}} md={6} className="p-3">
                        <Bar type={true} title={"Trade In"} note={"Upgrade and save.it's that easy."} link={"See What your device is worth"} view={<img className="w-50 rounded mx-auto d-block my-4" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphones-value-tradein-202303_GEO_US?wid=430&hei=429&fmt=png-alpha&.v=1680056918086" alt="" />}/>
                    </Col>
                    <Col style={{backgroundColor:'black'}} md={6} className="p-3">
                        <Bar type={false} title={"WWDC23"} note={"Apple Worldwide Developers Donference Join Us Online June 5-9"} link={"Learn More"} view={<video className="w-50 rounded mx-auto d-block my-4" src="https://developer.apple.com/wwdc23/videos/large_2x.mp4" autoPlay muted loop></video>}/>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col style={{backgroundColor:'white'}} md={6} className="p-3">
                        <Bar type={true} title={"WATCH"} note={"Pride is in the air"} link={"Shop The New Pride Edition Sport Band"} view={<img className="w-50 rounded mx-auto d-block my-4" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRTL3ref_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1683061253602" alt="" />}/>
                    </Col>
                    <Col style={{backgroundColor:'black'}} md={6} className="p-3">
                    <Bar type={false} title={'Final Cut Pro For iPad'} note={'Bring your entire studio to your shoot'} link={'Learn More'} view={<img className="w-50 rounded mx-auto d-block my-5" src="https://www.apple.com/v/final-cut-pro-for-ipad/a/images/overview/hero/main__ef1xja2uipiu_large.jpg" alt="" />}/>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col style={{backgroundColor:'black'}} md={6} className="p-3">
                        <Bar type={false} title={'Logic Pro for iPad'} note={'The ultimate music studio. At your finger tips'} link={'Learn More'} view={<img className="w-50 rounded mx-auto d-block my-4" style={{boxShadow: '0px -20px 100px 20px rgba(0, 14, 21, 1)'}} src="https://www.apple.com/v/logic-pro-for-ipad/a/images/overview/hero_main__eino273h63gy_large.jpg" alt="" />}/>
                    </Col>
                    <Col style={{backgroundColor:'white'}} md={6} className="p-3">
                        <Bar type={true} title={'Your Health Data In Your Control'} note={"Privacy. That's iPhone"} link={"Learn More"} view={<img className="w-50 rounded mx-auto d-block" src="https://www.apple.com/v/ios/health/k/images/overview/your-health/change_view__f7x0pnwckxea_large.jpg" alt="" />}/>
                    </Col>
                </Row>
        </div>
        <Footer mobile={mobile}/>
    </div>
}

Home.propTypes={
    mobile: PropTypes.any,
}

export default Home