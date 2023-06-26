import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import styled from 'styled-components'

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
margin: 1rem auto 0 auto;
width: 50%;
padding:3rem;
align-items:center;
`
const SearchOptions = styled(motion.ul)`
margin: 1rem 0 0 0;
padding:1rem;
`
const SearchOption = styled(motion.li)`
list-style:none;
margin: 1rem 0 0 0;
font-size:1rem;
color:white;
font-weight:bold;
`
const ContainerBagStyle={
    top: '4.8%',
    position: 'fixed',
    left:0,
    right:0,
    zIndex: 10000,
}

function Search() {
    const isLogged= useSelector(state=>state.user.logged)
    if (isLogged) return (
        <motion.div style={ContainerBagStyle} key='menu' initial={{opacity:0}} animate={{opacity:1,y:['-100px','0px']}} exit={{opacity:0,y:['0px','-100px']}} transition={{duration:'0.3'}} className='bg-dark w-100'>
            <SearchMenu>
                <svg style={{width:'35px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <SearchInput placeholder='Search'/>
                <SearchOptions>
                    <h3 style={{color:'grey',fontSize:'1.1rem'}}>Quick Links</h3>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>Store</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>AirPods</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>TV</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>iPhone 14 Pro</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>Trade</SearchOption>
                </SearchOptions>
            </SearchMenu>
        </motion.div>
    )
    else return (
        <motion.div style={ContainerBagStyle} key='menu2' initial={{opacity:0}} animate={{opacity:1,y:['-100px','0px']}} exit={{opacity:0,y:['0px','-100px']}} transition={{duration:'0.3'}} className='bg-dark w-100'>
            <SearchMenu>
                <svg style={{width:'35px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <SearchInput placeholder='Search'/>
                <SearchOptions>
                    <h3 style={{color:'grey',fontSize:'1.1rem'}}>Quick Links</h3>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>Store</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>AirPods</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>TV</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>iPhone 14 Pro</SearchOption>
                    <SearchOption><svg style={{width:'20px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mb-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>Trade</SearchOption>
                </SearchOptions>
            </SearchMenu>
        </motion.div>
    )
}
export default Search