import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const SignUp=({mobile})=>{
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        
        <Footer mobile={mobile} />
        </div>
    )
}

SignUp.propTypes={
    mobile: PropTypes.object
}

export default SignUp