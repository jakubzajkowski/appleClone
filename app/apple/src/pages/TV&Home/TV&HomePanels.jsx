import  PropTypes  from 'prop-types'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const TVandHomePanels=({mobile})=>{
    return (
                <div className='w-100'>
                    <Row className='w-75 mx-auto my-2'>
                        <Col lg='6' className='border rounded' style={{backgroundColor:'black',color:'white'}}>
                            <h1 className="text-center mt-5" style={{fontSize:'3rem',fontWeight:'bold'}}>HomePod</h1>
                            <h4 className="text-center" style={{fontSize:'2rem'}}>Profound sound.</h4>
                            <p className="text-center">$299</p>
                            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5">
                                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
                            </div>
                            <img className="w-100" src='https://www.apple.com/v/tv-home/j/images/overview/homepod__eam53jjm772a_large.jpg' alt="img" />
                        </Col>
                        <Col lg='6' className='border rounded' style={{backgroundColor:'white'}}>
                            <h1 className="text-center mt-5" style={{fontSize:'3rem',fontWeight:'bold'}}>HomePod mini</h1>
                            <h4 className="text-center" style={{fontSize:'2rem'}}>Surprising sound for its size.</h4>
                            <p className="text-center">$99</p>
                            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5">
                                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
                            </div>
                            <img className="w-100" src='https://www.apple.com/v/tv-home/j/images/overview/room_filling_sound__zagu3551kwyi_large.jpg' alt="img" />
                        </Col>
                    </Row>
                    <Row className='w-75 mx-auto my-2'>
                        <Col lg='6' className='border rounded' style={{backgroundColor:'white'}}>
                            <h1 className="text-center mt-5" style={{fontSize:'3rem',fontWeight:'bold'}}>Apple TV 4K</h1>
                            <h4 className="text-center" style={{fontSize:'2rem'}}>The Apple experience. Cinematic in every sense.</h4>
                            <p className="text-center">Starting at $129</p>
                            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5">
                                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
                            </div>
                            <img className="w-100" src='https://www.apple.com/v/tv-home/j/images/overview/apple_tv_4k__b30wcqp0pdle_large.jpg' alt="img" />
                        </Col>
                        <Col lg='6' className='border rounded' style={{backgroundColor:'white'}}>
                            <h1 className="text-center mt-5" style={{fontSize:'3rem',fontWeight:'bold'}}>Home app</h1>
                            <h4 className="text-center" style={{fontSize:'2rem'}}>The foundation for a smarter home.</h4>
                            <p className="text-center"></p>
                            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5">
                                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
                            </div>
                            <img className="w-100" src='https://www.apple.com/v/tv-home/j/images/overview/homeapp__cpc1k972xys2_large.jpg' alt="img" />
                        </Col>
                    </Row>
                </div>
    )
}

TVandHomePanels.propTypes={
    mobile: PropTypes.object
}

export default TVandHomePanels