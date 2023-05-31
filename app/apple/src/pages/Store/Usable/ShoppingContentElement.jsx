import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const ShoppingContentElement=({title,slogan,img,bg_color})=>{
    const Panel=styled(motion.div)`
        background-color:white;
        border-radius:1rem;
        background-image:url(${img});
        background-position: center;
        background-size: cover;
        margin:1rem;
        width:100%;
        height:500px;
        box-shadow: 0px 0px 25px -10px rgba(66, 68, 90, 1);
    `

    return (
        <Panel whileHover={{scale:1.02,boxShadow:'0px 0px 25px 1px rgba(66, 68, 90, 1)'}} transition={{duration:0.5,ease:'easeInOut'}}>
            <div className={(bg_color=='black' ? 'text-light p-4' : 'text-dark p-4')}>
                <p style={{fontSize:'0.9rem'}}>{title}</p>
                <h4 className={(bg_color=='black' ? 'text-light' : 'text-dark')}>{slogan}</h4>
            </div>
        </Panel>
    )
}

ShoppingContentElement.propTypes={
    img: PropTypes.string,
    slogan: PropTypes.string,
    title: PropTypes.string,
    bg_color: PropTypes.string
}

export default ShoppingContentElement