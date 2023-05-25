import {variants} from './MobileVariantsAnimate'
import styled from 'styled-components'
import { motion} from 'framer-motion';
import PropTypes from 'prop-types'

const MobileMenuContainer=({setIsOpenMenu,isOpenMenu})=>{
    const Menu=styled(motion.div)`
    position:fixed;
    height:100vh;
    z-index:1000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgb(20,20,20);
`
const MenuOptions = styled(motion.ul)`
    margin: 1rem 0 0 0;
    padding:3rem;
`
const Option = styled(motion.li)`
list-style:none;
margin: 1rem 0 0 0;
font-size:1.7rem;
color:white;
font-weight:bold;
`

    return (
    <Menu key='menu' variants={variants} initial={{visibility:'hidden'}} animate='open' exit='close' transition={{ease:'easeInOut',duration:0.5}}>
        <svg onClick={()=>setIsOpenMenu(!isOpenMenu)} xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,right:0,width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 m-3' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <MenuOptions>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 1.2,delay:0.2}}>Store</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 1.4,delay:0.2}}>Mac</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 1.4,delay:0.2}}>iPad</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 1.6,delay:0.2}}>iPhone</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 1.8,delay:0.2}}>Watch</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 2,delay:0.2}}>TV & Home</Option>
            <Option initial={{opacity:0}} animate={{opacity: isOpenMenu ? 1 : 0}} transition={{duration: 2.2,delay:0.2}}>Support</Option>
        </MenuOptions>
    </Menu>
    )
}

MobileMenuContainer.propTypes = {
    setIsOpenMenu: PropTypes.any,
    isOpenMenu: PropTypes.bool
  };
  



export default MobileMenuContainer