import {variants} from './MobileVariantsAnimate'
import styled from 'styled-components'
import { motion} from 'framer-motion';
import PropTypes from 'prop-types'

const MobileSearchContainer=({setIsOpenSearch,isOpenSearch})=>{
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
const SearchInput=styled.input`
color:white;
background-color:transparent;
border:none;
font-size:1.7rem;
width:70%;
&:focus {
    outline: none;
}
`
const SearchMenu=styled.div`
margin: 1rem 0 0 0;
padding:3rem;
align-items:center;
`

    return (
    <Menu key='search' variants={variants} initial={{visibility:'hidden'}} animate='open' exit='close' transition={{ease:'easeInOut',duration:0.5}}>
        <svg onClick={()=>setIsOpenSearch(!isOpenSearch)} xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,right:0,width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 m-3' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <SearchMenu>
            <svg style={{width:'35px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <SearchInput placeholder='Search'/>
        </SearchMenu>
    </Menu>  
    )
}




MobileSearchContainer.propTypes = {
    setIsOpenSearch: PropTypes.any,
    isOpenSearch: PropTypes.bool
  };
  



export default MobileSearchContainer