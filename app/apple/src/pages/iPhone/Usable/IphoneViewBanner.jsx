import  PropTypes from 'prop-types'

const IphoneViewBanner=({img,iphone,slogan,price,color})=>{
    return (
        <div className="w-100 position-relative my-3 p-4 iphone-14__section" style={{backgroundColor:color,color:(color=='white' || color=='rgb(245,245,245)') ? 'black' : 'white'}}>
            <h1 className="text-center mt-5 p-4" style={{fontSize:'3rem',fontWeight:'bold'}}>{iphone}</h1>
            <h4 className="text-center" style={{fontSize:'2rem'}}>{slogan}</h4>
            <p className="text-center">{price}</p>
            <div className="d-flex w-50 mx-auto justify-content-around text-primary mb-5 p-2">
                <p style={{cursor:'pointer',listStyle:'none'}}>Learn More</p>
                <p style={{cursor:'pointer',listStyle:'none'}}>Buy</p>
            </div>
            <img className="w-50 p-3 rounded mx-auto d-block" src={img} alt="img" />
        </div>
    )
}

IphoneViewBanner.propTypes={
    img : PropTypes.string,
    iphone: PropTypes.string,
    slogan: PropTypes.string,
    price:PropTypes.string,
    color:PropTypes.string
}
export default IphoneViewBanner