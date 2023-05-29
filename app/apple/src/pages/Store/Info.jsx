import PropTypes from 'prop-types'

const style={
    backgroundColor:'white',
    width:'16%',
    borderRadius:'1rem',
    boxShadow: '0px 0px 25px -18px rgba(66, 68, 90, 1)'
}

const Info=({content,svg})=>{
    return (
        <div className='p-4' style={style}>
            {svg}
            {content}
        </div>
    )
}

Info.propTypes={
    content: PropTypes.string,
    svg: PropTypes.any
}

export default Info