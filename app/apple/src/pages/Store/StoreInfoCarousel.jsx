import { motion } from "framer-motion"
import styled from 'styled-components'
import Info from "./Info"
import { useEffect,useState,useRef } from "react"
import { StoreInfoList } from "./StoreInfoLists"
const Carousel=styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:0 0 3rem 0;
    width: 125%;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
        width: 100%;
    }
`
const Header=styled.h3`
    color:rgb(90,90,90),
    font-weight:bold;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
    }
`

const StoreInfoCarousel=()=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/1.25)
    })
    return(
        <div className='store__products_carousel' style={{overflow:'hidden',width:'100%'}}>
          <Header className="my-5"><span style={{color:'black'}}>The Apple Store difference.</span> Even more reasons to shop with us.</Header>
          <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} >
            {StoreInfoList.map(info=><Info key={info.content} content={info.content} svg={info.svg}/>)}
          </Carousel>
        </div>
        )
}

export default StoreInfoCarousel