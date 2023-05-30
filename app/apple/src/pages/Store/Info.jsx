import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const style={
    backgroundColor:'white',
    width:'16%',
    borderRadius:'1rem',
    boxShadow: '0px 0px 25px -18px rgba(66, 68, 90, 1)'
}

const Info=({content,svg})=>{
    return (
        <motion.div className='p-4' style={style} whileHover={{scale:1.02,boxShadow:'0px 0px 25px -10px rgba(66, 68, 90, 1)'}} transition={{duration:0.5,ease:'easeInOut'}}>
            {svg}
            {content}
        </motion.div>
    )
}

Info.propTypes={
    content: PropTypes.string,
    svg: PropTypes.any
}

export default Info