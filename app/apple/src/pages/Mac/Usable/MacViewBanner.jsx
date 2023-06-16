import  PropTypes from 'prop-types'

const MacViewBanner=({img,mac,slogan,price})=>{
    return (
        <div className="w-100 position-relative my-3 p-4 iphone-14__section" style={{backgroundColor:'rgb(252,252,252)'}}>
            <h1 className="text-center mt-5 p-4 text-dark" style={{fontSize:'3rem',fontWeight:'bold'}}>{mac}</h1>
            <h4 className="text-center text-dark" style={{fontSize:'2rem'}}>{slogan}</h4>
            <p className="text-center text-dark">{price}</p>
            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5 p-2">
                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
            </div>
            <img className="w-50 p-3 rounded mx-auto d-block" src={img} alt="img" />
        </div>
    )
}

MacViewBanner.propTypes={
    img : PropTypes.string,
    mac: PropTypes.string,
    slogan: PropTypes.string,
    price:PropTypes.string
}

export default MacViewBanner