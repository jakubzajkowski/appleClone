import Container from "react-bootstrap/esm/Container"
import { footerText } from "./TextFooter"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import PropTypes from 'prop-types' 


function Footer({mobile}) {
    const liStyle={
        listStyle:'none',
        fontSize:'0.8rem',
        margin: '0.4rem 0'
    }
    const liMainStyle={
        listStyle:'none',
        fontWeight:'bold',
        fontSize:'0.8rem',
        margin: '0.4rem 0'
    }
    return (
        <div className="w-100 position-relative iphone-14-pro__section">
            <Container className={mobile.matches ? "w-100" : "w-50"}>
                <p style={{fontSize:'0.8rem',color:'rgb(100,100,100)'}}>{footerText}</p>
                <hr />
                <Row className="p-3">
                    <Col md={3} className="p-3">
                        <ul>
                            <li style={liMainStyle}>Shop and Learn</li>
                            <li style={liStyle}>Store</li>
                            <li style={liStyle}>Mac</li>
                            <li style={liStyle}>iPad</li>
                            <li style={liStyle}>iPhone</li>
                            <li style={liStyle}>Watch</li>
                            <li style={liStyle}>AirPods</li>
                            <li style={liStyle}>TV & Home</li>
                            <li style={liStyle}>AirTag</li>
                            <li style={liStyle}>Accessories</li>
                            <li style={liStyle}>Gift Cards</li>
                        </ul>
                    </Col>
                    <Col md={3} className="p-3">
                        <ul>
                            <li style={liMainStyle}>Account</li>
                            <li style={liStyle}>Manage Your Apple ID</li>
                            <li style={liStyle}>Apple Store Account</li>
                            <li style={liStyle}>iCloud.com</li>
                        </ul>
                        <ul>
                            <li style={liMainStyle}>Entertainment</li>
                            <li style={liStyle}>Apple One</li>
                            <li style={liStyle}>Apple TV+</li>
                            <li style={liStyle}>Apple Music</li>
                            <li style={liStyle}>Apple Arcade</li>
                            <li style={liStyle}>Apple Fitness+</li>
                            <li style={liStyle}>Apple News+</li>
                            <li style={liStyle}>Apple Podcasts</li>
                        </ul>
                    </Col>
                    <Col md={3} className="p-3">
                        <ul>
                            <li style={liMainStyle}>Apple Store</li>
                            <li style={liStyle}>Find a Store</li>
                            <li style={liStyle}>Genius Bar</li>
                            <li style={liStyle}>Today at Apple</li>
                            <li style={liStyle}>Apple Camp</li>
                            <li style={liStyle}>Apple Store App</li>
                            <li style={liStyle}>Certified Refurbished</li>
                            <li style={liStyle}>Apple Trade In</li>
                            <li style={liStyle}>Financing</li>
                        </ul>
                    </Col>
                    <Col md={3} className="p-3">
                        <ul>
                            <li style={liMainStyle}>Apple Values</li>
                            <li style={liStyle}>Accessibility</li>
                            <li style={liStyle}>Education</li>
                            <li style={liStyle}>Environment</li>
                            <li style={liStyle}>Inclusion and Diversity</li>
                            <li style={liStyle}>Privacy</li>
                            <li style={liStyle}>Racial Equity and Justice</li>
                            <li style={liStyle}>Supplier Responsibility</li>
                        </ul>
                    </Col>
                </Row>
                <hr/>
                <p style={{fontSize:'0.8rem',color:'rgb(100,100,100)'}}>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
            </Container>
        </div>
    )
}
Footer.propTypes={
    mobile: PropTypes.any,
}
export default Footer