import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MobileSearchContainer from './MobileSearchContainer';
import {AnimatePresence} from 'framer-motion';
import MobileMenuContainer from './MobileMenuContainer';
import MobileBagContainer from './MobileBagContainer';

function MobileNavigation() {
    const [isOpenMenu,setIsOpenMenu]=useState(false)
    const [isOpenSearch,setIsOpenSearch]=useState(false)
    const [isOpenBag,setIsOpenBag]=useState(false)
    //I don't know why styled this styled component didnt work with AnimatePresence inside so i made normal style for him
    const navBarStyle={
        width: '100%',
        display:'flex',
        position:'fixed',
        zIndex:1000,
        top:0,
        justifyContent:'space-between',
        padding: '0.5rem',
        backgroundColor:'rgb(60, 60, 60,0.9)',
        backdropFilter: 'blur(3px)'
    }
    return  (
    <>
    <div style={navBarStyle}>
        <svg style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
        <div>
            <svg onClick={()=>setIsOpenSearch(!isOpenSearch)} style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <svg onClick={()=>setIsOpenBag(!isOpenBag)} style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
            <svg onClick={()=>setIsOpenMenu(!isOpenMenu)} style={{width:'25px',fill:'rgb(227, 227, 227)',cursor:'pointer'}} className='p-1 mx-2 test' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <AnimatePresence>
                    {isOpenMenu && (
                       <MobileMenuContainer setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
                    )}
        </AnimatePresence>
        <AnimatePresence>
                    {isOpenSearch && (
                       <MobileSearchContainer setIsOpenSearch={setIsOpenSearch} isOpenSearch={isOpenSearch}/>
                    )}
        </AnimatePresence>
        <AnimatePresence>
                    {isOpenBag && (
                       <MobileBagContainer setIsOpenBag={setIsOpenBag} isOpenBag={isOpenBag}/>
                    )}
        </AnimatePresence>
    </div>
    <Container className='mt-5 p-1 text-center align-items-center' style={{fontSize:'0.9rem'}}>
        <p className='my-2'>Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1 <a style={{textDecoration:'none'}} href='#xd'>Shop iPhone</a></p>
    </Container>
    </>
)
}



export default MobileNavigation