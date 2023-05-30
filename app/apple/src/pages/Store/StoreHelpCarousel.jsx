import { motion } from "framer-motion"
import styled from 'styled-components'
import { HelpList } from "./HelpLists"
import Help from "./Help"
import { useEffect,useState,useRef,useContext} from "react"
import { MobileContext } from "../../context"

const Carousel=styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:0 0 3rem 0;
    width:125%;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
        width:400%;
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

const StoreHelpCarousel=()=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()
    const mobile = useContext(MobileContext)
    useEffect(()=>{
        if (mobile.matches){
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/4)
        }
        else{
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/1.25)
        }
    })
    return(
        <div className='store__products_carousel' style={{overflow:'hidden'}}>
           <Header className="my-3"><span style={{color:'black'}}>Help is here.</span> Whenever and however you need it.</Header>
           <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} >
                {HelpList.map(help=><Help key={help.slogan} title={help.title} bg_color={help.bg_color} img={help.img} slogan={help.slogan}/>)}
           </Carousel>
        </div>
        )
}

export default StoreHelpCarousel