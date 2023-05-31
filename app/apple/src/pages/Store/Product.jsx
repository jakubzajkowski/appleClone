import PropTypes from 'prop-types'

const Product=({name,img})=>{
    return (
        <div className='text-center'>
            <a href={`/store/buy-${name.toLowerCase()}`} style={{textDecoration:'none',color:'black'}}><img src={img} style={{width:'150px',pointerEvents:'none'}}/>
            <p className='m-2' style={{pointerEvents:'none'}}>{name}</p></a>
        </div>
    )
}

Product.propTypes={
    name: PropTypes.string,
    img: PropTypes.string
}

export default Product