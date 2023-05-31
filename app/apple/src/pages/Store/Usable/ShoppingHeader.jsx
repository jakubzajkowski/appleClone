import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StoreHeader=({text})=>{

    const Header=styled.div`
        padding: 0 0 0 25%;
        width:99%;
        @media (max-width: 950px) {
            padding: 1rem;
        }
    `

    return(
    <Header className='my-5 store__header'>
        <Row>
            <Col md="5">{text}</Col>
            <Col md="5">
                <ul style={{fontSize:'0.9rem'}}>
                    <li style={{listStyle:'none'}} className='d-flex align-items-center'>
                        <img style={{width:'35px'}} className='mb-3 mx-3' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202303_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1680617131118" alt="" />
                        <div>
                            <p>Need shopping help?</p>
                            <p><a href="">Ask a Specialist</a></p>
                        </div>
                    </li>
                    <li style={{listStyle:'none'}} className='d-flex align-items-center'>
                    <img style={{width:'35px'}} className='mb-3 mx-3' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054" alt=""/>
                        <div>
                            <p>Visit an Apple Store</p>
                            <p><a href="">Find one near you</a></p>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    </Header>)
}
StoreHeader.propTypes={
    text:PropTypes.string
}


export default StoreHeader