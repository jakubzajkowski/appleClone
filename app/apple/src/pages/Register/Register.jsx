import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Register=({mobile})=>{
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        
        <Footer mobile={mobile} />
        </div>
    )
}

Register.propTypes={
    mobile: PropTypes.object
}

export default Register