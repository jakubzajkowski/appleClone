import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const IMac=({mobile})=>{
    return (<div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <div>xd</div>
        <Footer mobile={mobile}/>
    </div>    
    )
}

IMac.propTypes={
    mobile:PropTypes.object
}


export default IMac